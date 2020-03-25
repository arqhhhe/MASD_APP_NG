import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminLoginComponent} from './admin-auth/admin-login/admin-login.component';
import {AdminLogoutComponent} from './admin-auth/admin-logout/admin-logout.component';
import {AdminBaseLayoutComponent} from '../layout/admin-base-layout/admin-base-layout.component';
import {AdminAuthLayoutComponent} from '../layout/admin-auth-layout/admin-auth-layout.component';

const adminRoutes: Routes = [
  // Admin routes goes here here
  {
    path: 'admin',
    component: AdminBaseLayoutComponent,
    children: [
      {path: '', component: AdminHomeComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminAuthLayoutComponent,
    children: [
      {path: 'login', component: AdminLoginComponent},
      {path: 'logout', component: AdminLogoutComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
