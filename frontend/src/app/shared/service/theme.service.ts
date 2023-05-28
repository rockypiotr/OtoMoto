import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UiSettings } from '../../data/schema/ui-settings';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _url = 'http://localhost:5000/api/uisettings';

  isNightMode: boolean = false;
  currentTheme: string = '';

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _http: HttpClient
  ) {}

  updateTheme(theme?: string): void {
    let themeLink = this._document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    if (theme) {
      this.currentTheme = theme;
    }
    if (themeLink) {
      themeLink.href = `${this.currentTheme}-${
        this.isNightMode ? 'dark' : 'light'
      }.css`;
    }
  }

  switchNightMode(): void {
    this.isNightMode = !this.isNightMode;
  }

  saveTheme(form: FormGroup): Observable<UiSettings> {
    return this._http.patch<UiSettings>(this._url, {});
  }
}
