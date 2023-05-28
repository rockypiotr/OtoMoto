import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../shared/service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems!: MenuItem[];
  displaySettings: boolean = false;
  languages: SelectItem[] = [
    { label: 'Polski', value: 'pl' },
    { label: 'English', value: 'en' },
  ];
  selectedLanguage: string = this._translate.defaultLang;
  fontOptions: number = 0;

  constructor(
    private _translate: TranslateService,
    private _router: Router,
    private _theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.navItems = this.buildUserProfileMenu();
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.navItems = this.buildUserProfileMenu();
    });
  }

  buildUserProfileMenu(): MenuItem[] {
    return [
      {
        label: this._translate.instant('NAV.ABOUT'),
        icon: 'pi pi-user',
        routerLink: '/about',
      },
      {
        label: this._translate.instant('NAV.AUCTIONS'),
        icon: 'pi pi-user',
        routerLink: '/auction/list',
      },
    ];
  }

  setLanguage(language: string): void {
    this._translate.use(language);
  }

  logout(): void {
    sessionStorage.removeItem('jwtToken');
    this._router.navigate(['/auth/login']);
  }

  onDisplaySettings(): void {
    this.displaySettings = true;
  }
}
