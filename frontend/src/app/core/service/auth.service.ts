import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _url = 'http://localhost:5000/api/auth/login';
  private readonly TOKEN_NAME = 'jwtToken';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token() {
    return sessionStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private _http: HttpClient, private _cookie: CookieService) {
    this._isLoggedIn$.next(!!this.token);
  }

  login(userData: { username: string; password: string }): Observable<string> {
    return this._http.post<string>(this._url, userData).pipe(
      tap((token) => {
        this._isLoggedIn$.next(true);
      })
    );
  }
}
