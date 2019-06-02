import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { Auth } from '../_service/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  hide = true;
  loading = false;
  signUpForm: FormGroup;
  currentUser: User;
  currentUserSubscription: Subscription;
  passwordMatcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    private auth: Auth) { }

  ngOnInit() {
    this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
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
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      // password: new FormControl('', [Validators.minLength(3), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(3), Validators.required]),
    },
      { validator: this.ValidatePassword });
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
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.signup(this.signUpForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/login']).then(() => {
            this.snackBar.open("Sign up successfully!", "OK", {
              duration: 4000
            });
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.msg, "OK", {
            duration: 4000
          });
        });
  }

  ValidatePassword(group: FormGroup) {
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;

    return confirmPassword === password ? null : { 'notSame': true }
  }
}