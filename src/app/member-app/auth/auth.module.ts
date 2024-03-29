import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import { PaymentDialogStripeComponent } from './register/payment-dialog-stripe/payment-dialog-stripe.component';
import {FormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../shared/custom-material/custom-material.module';


@NgModule({
    declarations: [LoginComponent, RegisterComponent, LogoutComponent, PaymentDialogStripeComponent],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        CustomMaterialModule
    ],
  entryComponents: [PaymentDialogStripeComponent]
})
export class AuthModule {
}
