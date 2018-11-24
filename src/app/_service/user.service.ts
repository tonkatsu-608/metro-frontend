import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private rootUrl = `http://localhost:3000`;
  private fakeUrl = `https://jsonplaceholder.typicode.com/posts`;
  
  constructor(private http: HttpClient) { }

  signup(user : User){
    const body: User = {
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      role: "user",
      enabled: true
    }
    return this.http.post(this.rootUrl + `/auth/signup`, body);
  }

  getUsers() {
    return this.http.get<User[]>(this.rootUrl + `/api/users`);
  }

  getMaps(id: string) {
    return this.http.get<Map[]>(this.fakeUrl);
  }
}
