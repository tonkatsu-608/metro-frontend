import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  hide = true;
  loading = false;
  submitted = false;
  signUpForm: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    // if user is already logged in, redirecting to /dashboard
    if (this.currentUser) {
      this.router.navigate(['/dashboard']);
    }
    this.signUpForm = this.formBuilder.group({
      $key: new FormControl(null),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.minLength(3), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(3), Validators.required]),
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onClear() {
    this.signUpForm.reset();
    this.signUpForm.setValue({
      $key: null,
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      confirmPassword: '',
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.signup(this.signUpForm.value)
      .pipe(first())
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
}