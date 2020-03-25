import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MemberAppRoutingModule} from './member-app-routing.module';
import {HomeComponent} from './home/home.component';
import {AuthModule} from './auth/auth.module';
import {ParentsComponent} from './parents/parents.component';
import {ParentListComponent} from './parents/parent-list/parent-list.component';
import {ParentDetailComponent} from './parents/parent-detail/parent-detail.component';
import {StudentsComponent} from './students/students.component';
import {StudentListComponent} from './students/student-list/student-list.component';
import {StudentDetailComponent} from './students/student-detail/student-detail.component';
import {CustomMaterialModule} from '../shared/custom-material/custom-material.module';


@NgModule({
    declarations: [
        HomeComponent,
        ParentsComponent,
        ParentListComponent,
        ParentDetailComponent,
        StudentsComponent,
        StudentListComponent,
        StudentDetailComponent
    ],
    imports: [
        CommonModule,
        MemberAppRoutingModule,
        AuthModule,
        CustomMaterialModule
    ]
})
export class MemberAppModule {
}
