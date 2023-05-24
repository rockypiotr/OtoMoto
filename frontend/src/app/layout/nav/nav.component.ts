import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems!: MenuItem[];
  languages: SelectItem[] = [
    { label: 'Polski', value: 'pl' },
    { label: 'Angielski', value: 'en' },
  ];
  selectedLanguage: string = 'pl';

  constructor(private _translate: TranslateService) {}

  ngOnInit() {
    this.navItems = [
      {
        label: 'NAV.ABOUT',
        icon: 'pi pi-user',
        routerLink: '/about',
      },
      {
        label: 'NAV.AUCTIONS',
        icon: 'pi pi-user',
        routerLink: '/auction/list',
      },
    ];
    this.translateNav();
  }

  setLang(language: string) {
    this._translate.setDefaultLang(language);
    this._translate.use(language);
    this.translateNav();
  }

  logout() {
    sessionStorage.removeItem('jwtToken');
  }

  translateNav() {
    this.navItems.forEach((item) => {
      if (item.label) {
        item.label = this._translate.instant(item.label);
      }
    });
    this.navItems = [...this.navItems];
  }
}
