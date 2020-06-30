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
import { ProfileComponent } from './parents/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyListComponent } from './faculties/faculty-list/faculty-list.component';
import { FacultyDetailComponent } from './faculties/faculty-detail/faculty-detail.component';
import { CommitteesComponent } from './committees/committees.component';
import { CommitteeListComponent } from './committees/committee-list/committee-list.component';
import { CommitteeDetailComponent } from './committees/committee-detail/committee-detail.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { SponsorDetailComponent } from './sponsors/sponsor-detail/sponsor-detail.component';
import { CalendarComponent } from './calendar/calendar.component';


import { NgxMaskModule, IConfig } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
    declarations: [
        HomeComponent,
        ParentsComponent,
        ParentListComponent,
        ParentDetailComponent,
        StudentsComponent,
        StudentListComponent,
        StudentDetailComponent,
        ProfileComponent,
        FacultiesComponent,
        FacultyListComponent,
        FacultyDetailComponent,
        CommitteesComponent,
        CommitteeListComponent,
        CommitteeDetailComponent,
        SponsorsComponent,
        SponsorListComponent,
        SponsorDetailComponent,
        CalendarComponent
    ],
  imports: [
    CommonModule,
    MemberAppRoutingModule,
    AuthModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class MemberAppModule {
}
