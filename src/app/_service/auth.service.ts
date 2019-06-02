import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { User } from '../_model/user.model';
import { Tokens } from '../_model/tokens.model';
import { config } from '../../config';

@Injectable({ providedIn: 'root' })
export class Auth {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('LOGGED_USER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<string> {
    return this.http.post<any>(`${config.rootUrl}/metro/auth/login`, { username: email, password: password })
    .pipe(
      tap(data => this.doLoginUser(data.user, data.tokens)),
      mapTo(email)
    );
    // .pipe(map(data => {
    //   // login successful if there's a jwt token in the response
    //   // if (user && user.token) {
    //   if (data.user) {
    //     if(data.user.hasOwnProperty('password')) delete data.user.password;
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(data.user));
    //     this.currentUserSubject.next(data.user);
    //   }
    //   return data;
    // }));
  }

  logout() {
    this.doLogoutUser();
    return this.http.post<any>(`${config.rootUrl}/metro/auth/logout`, {
      'refreshToken': this.getRefreshToken()
    });
  }

  // logout() {
  //   localStorage.removeItem(this.JWT_TOKEN);
  //   localStorage.removeItem(this.REFRESH_TOKEN);
  //   // localStorage.removeItem('currentUser');
  //   // this.currentUserSubject.next(null);
  //   return this.http.post<any>(`${this.rootUrl}/metro/auth/logout`, {
  //     'refreshToken': this.getRefreshToken()
  //   });
  // }

  refreshToken() {
    return this.http.post<any>(`${config.rootUrl}/metro/auth/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  public get loggedIn(): boolean {
    return !!this.getJwtToken();
  }

  public getJwtToken() {
    return localStorage.getItem(config.JWT_TOKEN);
  }

  private doLoginUser(user: User, tokens: Tokens) {
    this.storeUser(user);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.removeUser();
    this.removeTokens();
  }

  private storeUser(user: User) {
    localStorage.setItem('LOGGED_USER', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private removeUser() {
    localStorage.removeItem('LOGGED_USER');
    this.currentUserSubject.next(null);
  }

  private getRefreshToken() {
    return localStorage.getItem(config.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(config.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(config.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(config.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(config.JWT_TOKEN);
    localStorage.removeItem(config.REFRESH_TOKEN);
  }

  updateLocalStoragelUser(user) {
    localStorage.removeItem('LOGGED_USER');
    this.currentUserSubject.next(null);
    localStorage.setItem('LOGGED_USER', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}