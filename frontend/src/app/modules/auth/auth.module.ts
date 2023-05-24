import { NgModule } from '@angular/core';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from './auth.routing';
import { StepsModule } from 'primeng/steps';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRouting,
    StepsModule,
    RippleModule,
  ],
})
export class AuthModule {}
