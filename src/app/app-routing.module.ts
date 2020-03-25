import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './member-app/home/home.component';
import {MemberBaseLayoutComponent} from './layout/member-base-layout/member-base-layout.component';

const appRoutes: Routes = [
    // Member routes goes here
    {
        path: '',
        component: MemberBaseLayoutComponent,
        children: [
            {path: '', component: HomeComponent, pathMatch: 'full'}
        ]
    },
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
