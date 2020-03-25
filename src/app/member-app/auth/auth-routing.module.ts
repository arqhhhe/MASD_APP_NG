import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberAuthLayoutComponent} from '../../layout/member-auth-layout/member-auth-layout.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const authRoutes: Routes = [
  {
    path: '',
    component: MemberAuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(authRoutes),
      FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AuthRoutingModule { }
