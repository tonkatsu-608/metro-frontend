import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ThemeService } from './_service/theme.service';
import { Auth } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Metropolist';
  year = new Date().getFullYear();
  theme: string;
  themeSubscription: Subscription;

  constructor(
    private themeService: ThemeService,
    private auth: Auth) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.theme.subscribe(t => {
      this.theme = t;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.themeSubscription.unsubscribe();
  }
}
