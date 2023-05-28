import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UiSettingsComponent } from '../layout/nav/ui-settings/ui-settings.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [UiSettingsComponent],
  imports: [
    CommonModule,
    InputSwitchModule,
    SidebarModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    NgOptimizedImage,
    RippleModule,
    ReactiveFormsModule,
    SelectButtonModule,
    RadioButtonModule,
  ],
  exports: [UiSettingsComponent],
})
export class SharedModule {}
