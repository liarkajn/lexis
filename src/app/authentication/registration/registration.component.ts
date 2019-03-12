import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  EMAIL_ERROR_MESSAGE = 'Email must starts from 1 bit letter and length must be at least 6 characters';
  PASSWORD_ERROR_MESSAGE = 'Password must contain at least 1 big letter and 1 numeric and contain at least 8 characters';
  REPEATED_PASSWORD_ERROR_MESSAGE = 'Passwords don\'t match';
  isEmailError = false;
  isPasswordError = false;
  isRepeatedPasswordError = false;

  constructor() { }

  ngOnInit() {
  }

  validate() {
    if (!this.isEmailError) {
      this.isEmailError = !this.isEmailError;
    } else {
      if (!this.isPasswordError) {
        this.isPasswordError = !this.isPasswordError;
      } else {
        if (!this.isRepeatedPasswordError) {
          this.isRepeatedPasswordError = !this.isRepeatedPasswordError;
        } else {
          this.isEmailError = !this.isEmailError;
          this.isPasswordError = !this.isPasswordError;
          this.isRepeatedPasswordError = !this.isRepeatedPasswordError;
        }
      }
    }
  }

}
