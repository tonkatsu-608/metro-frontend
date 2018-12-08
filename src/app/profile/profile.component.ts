import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isEnter: boolean = false;
  isBgEnter: boolean = false;
  hide: boolean = true;
  loading: boolean = false;
  submitted: boolean = false;
  isEmailChanged: boolean = false;
  isNameChanged: boolean = false;

  email: string;
  firstname: string;
  lastname: string;
  password: string;
  currentUser: User;
  currentUserSubscription: Subscription;

  emailForm: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar) { 
      this.emailForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email])
      });
    }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  updateEmail(email) {
    console.log(email)
    let user = new User();
    this.userService.updateUser(user)
      .subscribe(
        data => {
          this.router.navigate(['/login']).then(() => {
            this.snackBar.open("Sign up successfully!", "OK", {
              duration: 5000
            });
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error, "OK", {
            duration: 5000
          });
        });
  }
  
  emailChanged(email) {
    if(email === this.currentUser.email || email === "" || !email.includes('@')) {
      this.isEmailChanged = false;
    } else {
      this.isEmailChanged = true;
      this.email = email;
    }
    console.log(this.email)
  }

  firstnameChanged(firstname) {
    if(firstname === this.currentUser.firstname || firstname === "") {
      this.isNameChanged = false;
    } else {
      this.isNameChanged = true;
      this.firstname = firstname;
    }
  }

  lastnameChanged(lastname) {
    if(lastname === this.currentUser.lastname || lastname === "") {
      this.isNameChanged = false;
    } else {
      this.isNameChanged = true;
      this.lastname = lastname;
    }
  }

  onAvatarEnter() {
    this.isEnter = true;
  }

  onAvatarLeave() {
    this.isEnter = false;
  }

  onBgEnter() {
    this.isBgEnter = true;
  }

  onBgLeave() {
    this.isBgEnter = false;
  }
}
