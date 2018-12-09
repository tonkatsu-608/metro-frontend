import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private rootUrl = `http://localhost:3000`;
  constructor(private http: HttpClient) { }

  signup(user: User) {
    const body = {
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      role: "user",
      enabled: true
    }
    return this.http.post(this.rootUrl + `/metro/auth/signup`, body);
  }

  getUsers() {
    return this.http.get<User[]>(this.rootUrl + `/metro/api/v1/users`);
  }

  getMaps(uid: string) {
    return this.http.get<Map[]>(this.rootUrl + `/metro/api/v1/${uid}/maps/`);
  }

  getMap(id: string) {
    return this.http.get<Map>(this.rootUrl + `/metro/api/v1/m/` + id);
  }

  createMap(map: Map) {
    return this.http.post(this.rootUrl + `/metro/api/v1/m/create`, map);
  }

  saveMap(map: Map) {
    return this.http.put(this.rootUrl + `/metro/api/v1/m/update`, map);
  }

  deleteMap(id: string) {
    return this.http.delete(this.rootUrl + `/metro/api/v1/m/delete/` + id);
  }

  updateEmail(email: string, id: string) {
    const body = {
      id: id,
      email: email
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/u/update/email`, body);
  }

  updateName(firstname: string, lastname: string, id: string) {
    const body = {
      id: id,
      firstname: firstname,
      lastname: lastname
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/u/update/name`, body);
  }

  verifyPassword(password: string, id: string) {
    const body = {
      id: id,
      password: password
    }
    return this.http.patch(this.rootUrl + `/metro/api/v1/u/verify/password`, body);
  }

  updatePassword(password: string, id: string) {
    const body = {
      id: id,
      password: password
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/u/update/password`, body);
  }
}
