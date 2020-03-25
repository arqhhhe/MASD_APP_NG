import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminLogoutComponent, AdminRegisterComponent],
  imports: [
    CommonModule,
    AdminAuthRoutingModule
  ]
})
export class AdminAuthModule { }
