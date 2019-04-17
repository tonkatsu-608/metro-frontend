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

  getUser(id: string) {
    return this.http.get<User>(this.rootUrl + `/metro/api/v1/user/` + id);
  }

  getUsers() {
    return this.http.get<User[]>(this.rootUrl + `/metro/api/v1/users`);
  }

  getMaps(uid: string) {
    return this.http.get<Map[]>(this.rootUrl + `/metro/api/v1/user/${uid}/maps/`);
  }

  verifyPassword(password: string, id: string) {
    const body = {
      id: id,
      password: password
    }
    return this.http.patch(this.rootUrl + `/metro/api/v1/user/verify/password`, body);
  }

  updateEmail(email: string, id: string) {
    const body = {
      id: id,
      email: email
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/user/update/email`, body);
  }

  updateName(firstname: string, lastname: string, id: string) {
    const body = {
      id: id,
      firstname: firstname,
      lastname: lastname
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/user/update/name`, body);
  }

  updatePassword(password: string, id: string) {
    const body = {
      id: id,
      password: password
    }
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/user/update/password`, body);
  }

  blockUser(user: User) {
    return this.http.put<User>(this.rootUrl + `/metro/api/v1/user/update/enabled`, user);
  }
}
