import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private rootUrl = `http://localhost:3000`;
  constructor(private http: HttpClient) { }

  signup(user: User) {
    const body = {
      role: "user",
      enabled: true,
      email: user.email,
      password: user.password,
      lastname: user.lastname,
      firstname: user.firstname,
      avatar: "assets/images/avatar-0.jpg"
    }

    return this.http.post(this.rootUrl + `/metro/auth/signup`, body);
  }

  getUser(uid: string) {
    return this.http.get<User>(this.rootUrl + `/metro/api/v1/users/${uid}`);
  }

  getUsers() {
    return this.http.get<User[]>(this.rootUrl + `/metro/api/v1/users`);
  }

  getMaps(uid: string) {
    return this.http.get<Map[]>(this.rootUrl + `/metro/api/v1/users/${uid}/maps/`);
  }

  verifyPassword(password: string, uid: string) {
    const body = {
      id: uid,
      password: password
    }
    return this.http.patch(this.rootUrl + `/metro/api/v1/users/${uid}/password`, body);
  }

  updateEmail(email: string, uid: string) {
    const body = {
      id: uid,
      email: email
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/users/${uid}/email`, body);
  }

  updateName(firstname: string, lastname: string, uid: string) {
    const body = {
      id: uid,
      firstname: firstname,
      lastname: lastname
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/users/${uid}/name`, body);
  }

  updatePassword(password: string, uid: string) {
    const body = {
      id: uid,
      password: password
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/users/${uid}/password`, body);
  }

  updteEnabled(user: User, uid: string) {
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/users/${user.id}/enabled`, user);
  }
}
