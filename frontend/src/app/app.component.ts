import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './shared/service/theme.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private _translate: TranslateService,
    private _theme: ThemeService,
    private _primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this._theme.updateTheme('lara');
    this._translate.use('pl');
    this._primengConfig.ripple = true;
  }
}
