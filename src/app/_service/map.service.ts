import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Map } from '../_model/map.model';

@Injectable({ providedIn: 'root' })
export class MapService {
  private currentUMapSubject: BehaviorSubject<Map>;
  public currentMap: Observable<Map>;

  constructor(private http: HttpClient) {
    this.currentUMapSubject = new BehaviorSubject<Map>(JSON.parse(localStorage.getItem('currentMap')));
    this.currentMap = this.currentUMapSubject.asObservable();
  }

  public get currentMapValue(): Map {
    return this.currentUMapSubject.value;
  }

  setCurrentMap2LocalStorage(map: Map) {
    localStorage.setItem('currentMap', JSON.stringify(map));
    this.currentUMapSubject.next(map);
  }

  removeCurrentMapFormLocalStorage() {
    localStorage.removeItem('currentMap');
    this.currentUMapSubject.next(null);
  }
}