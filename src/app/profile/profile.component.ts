import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, Form, FormGroupDirective, NgForm } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hide: boolean = true;
  loading: boolean = false;
  isEnter: boolean = false;
  isBgEnter: boolean = false;
  submitted: boolean = false;
  isEmailChanged: boolean = false;
  isNameChanged: boolean = false;
  isConfirmed: boolean = false;
  currentUser: User;
  currentUserSubscription: Subscription;
  emailForm: FormGroup;
  nameForm: FormGroup;
  passwordForm: FormGroup;
  confirmPasswordForm: FormGroup;
  passwordMatcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.emailForm = this.formBuilder.group({
      email: new FormControl(this.currentUser.email, [Validators.email, this.ValidateEmail(this.currentUser.email)])
    });
    this.nameForm = this.formBuilder.group({
      firstname: new FormControl(this.currentUser.firstname, [this.ValidateFirstname(this.currentUser.firstname)]),
      lastname: new FormControl(this.currentUser.lastname, [this.ValidateLastname(this.currentUser.lastname)])
    });
    this.passwordForm = this.formBuilder.group({
      password: new FormControl('', [Validators.minLength(3)]),
    });
    this.confirmPasswordForm = this.formBuilder.group({
      newPassword: new FormControl('', [Validators.minLength(3)]),
      confirmNewPassword: new FormControl('', [Validators.minLength(3)])
    },
      { validator: this.ValidatePassword });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onUpdateEmail() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.emailForm.invalid || !this.isEmailChanged) {
      return;
    }
    this.userService.updateEmail(this.emailForm.value.email, this.currentUser.id)
      .subscribe(
        (data: User) => {
          this.authenticationService.updateLocalStoragelUser(data);
          this.ngOnInit();
          this.snackBar.open("Email updated successfully!", "OK", {
            duration: 4000
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.msg, "OK", {
            duration: 4000
          });
        });
  }

  onUpdateName() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.nameForm.invalid || !this.isNameChanged) {
      return;
    }
    this.userService.updateName(this.nameForm.value.firstname, this.nameForm.value.lastname, this.currentUser.id)
      .subscribe(
        (data: User) => {
          this.authenticationService.updateLocalStoragelUser(data);
          this.ngOnInit();
          this.snackBar.open("Name updated successfully!", "OK", {
            duration: 4000
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.msg, "OK", {
            duration: 4000
          });
        });
  }

  onUpdatePassword() {
    // stop here if form is invalid
    if (this.confirmPasswordForm.invalid) {
      return;
    }
    this.userService.updatePassword(this.confirmPasswordForm.value.confirmNewPassword, this.currentUser.id)
      .subscribe(
        (data: User) => {
          this.authenticationService.updateLocalStoragelUser(data);
          this.ngOnInit();
          this.isConfirmed = false;
          this.snackBar.open("Password updated successfully!", "OK", {
            duration: 4000
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.msg, "OK", {
            duration: 4000
          });
        });
  }

  verifyPassword() {
    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }
    this.userService.verifyPassword(this.passwordForm.value.password, this.currentUser.id)
      .subscribe(
        (data: boolean) => {
          if (data) {
            this.isConfirmed = true;
            this.snackBar.open("Password verified!", "OK", {
              duration: 4000
            });
          } else {
            this.snackBar.open("Incorrect password, please try again!", "OK", {
              duration: 4000
            });
          }
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.msg, "OK", {
            duration: 4000
          });
        });
  }

  ValidateEmail(email: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value === email || control.value === "") {
        this.isEmailChanged = false;
      } else {
        this.isEmailChanged = true;
      }
      return null;
    }
  }

  ValidateFirstname(name: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value === name || control.value === "") {
        this.isNameChanged = false;
      } else {
        this.isNameChanged = true;
      }
      return null;
    }
  }

  ValidateLastname(name: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value === name || control.value === "") {
        this.isNameChanged = false;
      } else {
        this.isNameChanged = true;
      }
      return null;
    }
  }

  ValidatePassword(group: FormGroup) {
    let password = group.controls.newPassword.value;
    let confirmPassword = group.controls.confirmNewPassword.value;
  
    return password === confirmPassword && confirmPassword !== "" ? null : { 'notSame': true }
  }
}