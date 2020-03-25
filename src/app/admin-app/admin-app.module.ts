import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    AdminAppRoutingModule,
    AdminAuthModule
  ]
})
export class AdminAppModule { }
