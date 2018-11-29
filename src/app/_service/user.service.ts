import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  saveMap(map: Map) {
    const body = {
      uid: map.uid,
      name: map.name,
      img: map.img,
      sites: map.sites,
      clusters: map.clusters,
      createDate: map.createDate,
      editDate: map.editDate
    }
    return this.http.post(this.rootUrl + `/metro/api/v1/map/save`, body);
  }

  getMaps(id: string) {
    return this.http.get<Map[]>(this.rootUrl + `/metro/api/v1/maps`);
  }
}
