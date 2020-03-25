import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MemberBaseLayoutComponent} from '../layout/member-base-layout/member-base-layout.component';
import {ParentsComponent} from './parents/parents.component';
import {ParentDetailComponent} from './parents/parent-detail/parent-detail.component';
import {StudentsComponent} from './students/students.component';
import {StudentDetailComponent} from './students/student-detail/student-detail.component';

const memberRoutes: Routes = [
  // Member routes goes here
  {
    path: '',
    component: MemberBaseLayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {
        path: 'parents', component: ParentsComponent, children: [
          {path: ':id', component: ParentDetailComponent}
        ]
      },
      {
        path: 'students', component: StudentsComponent, children: [
          {path: ':id', component: StudentDetailComponent}
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(memberRoutes)],
  exports: [RouterModule]
})
export class MemberAppRoutingModule {
}
