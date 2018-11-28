import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

import { User } from '../_model/user.model';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnDestroy, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
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

