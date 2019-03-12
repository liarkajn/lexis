import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  EMAIL_ERROR_MESSAGE = 'Email must starts from 1 bit letter and length must be at least 6 characters';
  PASSWORD_ERROR_MESSAGE = 'Password must contain at least 1 big letter and 1 numeric and contain at least 8 characters';
  isEmailError = false;
  isPasswordError = false;

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
        this.isEmailError = !this.isEmailError;
        this.isPasswordError = !this.isPasswordError;
      }
    }
  }

}
