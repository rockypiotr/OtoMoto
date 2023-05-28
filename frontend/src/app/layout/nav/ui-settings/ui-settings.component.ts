import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../../shared/service/theme.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ui-settings',
  templateUrl: './ui-settings.component.html',
  styleUrls: ['./ui-settings.component.scss'],
})
export class UiSettingsComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  uiForm!: FormGroup;
  fontSize: number = 3;
  themeOptions: SelectItem[] = [
    { label: 'Lara', value: 'lara' },
    { label: 'Soho', value: 'soho' },
    { label: 'BootStrap', value: 'bootstrap' },
  ];

  constructor(private _theme: ThemeService) {}

  ngOnInit(): void {
    this.uiForm = new FormGroup({
      theme: new FormControl('lara'),
      nightMode: new FormControl(false),
      scale: new FormControl(this.fontSize),
    });
  }

  saveSettings(form: FormGroup): void {
    this.visibleChange.emit(false);
  }

  setTheme(theme: string): void {
    this._theme.updateTheme(theme);
  }

  switchNightMode(): void {
    this._theme.switchNightMode();
    this._theme.updateTheme();
  }

  incrementFontSize(): void {
    if (this.uiForm.value.scale < 5) {
      this.uiForm.patchValue({
        scale: this.uiForm.value.scale + 1,
      });
    }
  }

  decrementFontSize() {
    if (this.uiForm.value.scale > 0) {
      this.uiForm.patchValue({
        scale: this.uiForm.value.scale - 1,
      });
    }
  }
}
