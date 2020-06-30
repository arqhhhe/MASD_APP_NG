import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MemberAppModule} from './member-app/member-app.module';
import {AdminAppModule} from './admin-app/admin-app.module';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from './layout/layout.module';
import {CustomMaterialModule} from './shared/custom-material/custom-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockDataService} from './shared/mock-data.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/auth.service';


// import { NgxMaskModule, IConfig } from 'ngx-mask';
//
// export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MemberAppModule,
    AdminAppModule,
    // NgxMaskModule.forRoot(),
  ],
  providers: [MockDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
