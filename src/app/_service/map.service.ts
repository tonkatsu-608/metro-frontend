import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Map } from '../_model/map.model';

@Injectable({ providedIn: 'root' })
export class MapService {
  private rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  getMap(mid: string) {
    return this.http.get<Map>(this.rootUrl + `/metro/api/v1/maps/${mid}`);
  }

  getMaps(page: number, limit: number) {
    return this.http.get<any[]>(this.rootUrl + `/metro/api/v1/maps/?page=${page}&limit=${limit}`);
  }

  createMap(map: Map) {
    return this.http.post(this.rootUrl + `/metro/api/v1/maps`, map);
  }

  saveMap(map: Map, mid: string) {
    return this.http.put(this.rootUrl + `/metro/api/v1/maps/${mid}`, map);
  }

  deleteMap(mid: string) {
    return this.http.delete(this.rootUrl + `/metro/api/v1/maps/${mid}`);
  }
}