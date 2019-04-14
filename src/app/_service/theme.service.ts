import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentTheme')));
  public theme: Observable<string>;

  constructor() {
    this.themeSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentTheme')));
    this.theme = this.themeSubject.asObservable();
  }

  public setTheme(theme: string) {
    localStorage.removeItem('currentTheme');
    this.themeSubject.next(null);
    localStorage.setItem('currentTheme', JSON.stringify(theme));
    this.themeSubject.next(theme);
  }

  public getTheme() {
    return JSON.parse(localStorage.getItem('currentTheme')) || this.theme;
  }
}