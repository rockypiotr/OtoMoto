import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems!: MenuItem[];
  languages: SelectItem[] = [
    { label: 'Polski', value: 'pl' },
    { label: 'English', value: 'en' },
  ];
  selectedLanguage: string = 'pl';

  constructor(private _translate: TranslateService, private _router: Router) {}

  ngOnInit(): void {
    this.navItems = this.buildUserProfileMenu();
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.navItems = this.buildUserProfileMenu();
    });
    this._translate.use('pl');
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
}
