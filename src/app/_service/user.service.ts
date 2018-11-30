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
    return this.http.get<Map[]>(this.rootUrl + `/metro/api/v1/maps/` + uid);
  }

  saveMap(map: Map, mode: string) {
    if(mode === 'create') {
      return this.http.post(this.rootUrl + `/metro/api/v1/map/save`, map);
    } else if(mode === 'edit') {
      return this.http.put(this.rootUrl + `/metro/api/v1/map/update`, map);
    } else {
      console.log('error save map');
    }
  }

  deleteMap(id: string) {
    return this.http.delete(this.rootUrl + `/metro/api/v1/map/delete/` + id);
  }
}
