import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _url = 'http://localhost:5000/api/auth/login';

  constructor(private _http: HttpClient, private _cookie: CookieService) {}

  login(userData: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return this._http.post<{ token: string }>(this._url, userData);
  }

  isAuthenticated(): boolean {
    // Do poprawienia jest ta funkcja
    return !!sessionStorage.getItem('jwtToken');
  }
}
