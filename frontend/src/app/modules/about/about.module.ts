import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './page/about/about.component';
import { AboutRouting } from './about.routing';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRouting,
    DividerModule,
    InputTextModule,
    DialogModule,
    ChipModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class AboutModule {}
