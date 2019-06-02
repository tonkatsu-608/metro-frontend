import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../_model/user.model';
import { Auth } from '../_service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: User;
  isUser: boolean;
  isAdmin: boolean;
  currentUserSubscription: Subscription;

  constructor(private auth: Auth) {
    this.currentUserSubscription = this.auth.currentUser
      .subscribe(user => {
        this.currentUser = user;
        if (this.currentUser && this.currentUser.role === 'user') { this.isUser = true; } else { this.isUser = false; }
        if (this.currentUser && this.currentUser.role === 'admin') { this.isAdmin = true; } else { this.isAdmin = false; }
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }
}
