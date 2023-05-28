import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _auth: AuthService,
    private _cookie: CookieService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onLogin(form: FormGroup) {
    this._auth.login(form.value).subscribe({
      next: (token) => {
        sessionStorage.setItem('jwtToken', token);
        this._router.navigate(['about']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
