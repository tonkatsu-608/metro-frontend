import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { User } from '../_model/user.model';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginForm: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    // if user is already logged in, redirecting to /dashboard
    if(this.currentUser) {
      this.router.navigate(['/dashboard']);
    }

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.userService.login(this.loginForm.value)
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]).then(() => {
            this.snackBar.open("Welcome back! " + data.user.firstname, "OK", {
              duration: 5000
            });
          });
        },
        error => {
          this.loading = false;
          this.router.navigate(['/login']).then(() => {
            if(error) {
              this.snackBar.open(error.error.msg, "OK", {
                duration: 5000
              });
            }
          });;
        });
  }
}