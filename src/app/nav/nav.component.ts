import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { User } from '../_model/user.model';
import { ThemeService } from '../_service/theme.service';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit, OnDestroy {
  currentTheme: string;
  currentThemeSubscription: Subscription;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.currentThemeSubscription = this.themeService.theme.subscribe(t => {
      this.currentTheme = t === null ? 'default' : t;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    this.currentThemeSubscription.unsubscribe();
  }

  onChangeTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.currentThemeSubscription = this.themeService.theme.subscribe(t => {
      this.currentTheme = t;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then(() => {
      this.snackBar.open("Logout successfully", "OK", {
        duration: 5000
      });
    });
  }
}