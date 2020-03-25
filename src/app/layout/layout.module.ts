import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminSidebarComponent} from './admin-sidebar/admin-sidebar.component';
import {AdminAuthLayoutComponent} from './admin-auth-layout/admin-auth-layout.component';
import {AdminBaseLayoutComponent} from './admin-base-layout/admin-base-layout.component';
import { MemberHeaderComponent } from './member-header/member-header.component';
import { MemberSidebarComponent } from './member-sidebar/member-sidebar.component';
import { MemberFooterComponent } from './member-footer/member-footer.component';
import { MemberBaseLayoutComponent } from './member-base-layout/member-base-layout.component';
import { MemberAuthLayoutComponent } from './member-auth-layout/member-auth-layout.component';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';



@NgModule({
    declarations: [
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminSidebarComponent,
        AdminAuthLayoutComponent,
        AdminBaseLayoutComponent,
        MemberHeaderComponent,
        MemberSidebarComponent,
        MemberFooterComponent,
        MemberBaseLayoutComponent,
        MemberAuthLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
    ]
})
export class LayoutModule {
}
