import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MemberBaseLayoutComponent} from '../layout/member-base-layout/member-base-layout.component';
import {ParentsComponent} from './parents/parents.component';
import {ParentDetailComponent} from './parents/parent-detail/parent-detail.component';
import {StudentsComponent} from './students/students.component';
import {StudentDetailComponent} from './students/student-detail/student-detail.component';
import {ProfileComponent} from './parents/profile/profile.component';
import {FacultiesComponent} from './faculties/faculties.component';
import {FacultyDetailComponent} from './faculties/faculty-detail/faculty-detail.component';
import {CommitteesComponent} from './committees/committees.component';
import {CommitteeDetailComponent} from './committees/committee-detail/committee-detail.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {SponsorDetailComponent} from './sponsors/sponsor-detail/sponsor-detail.component';
// import {ShoppingComponent} from './shopping/shopping.component';
import {StoresComponent} from './shopping/stores/stores.component';
import {ProductsComponent} from './shopping/products/products.component';
import {ProductDetailComponent} from './shopping/products/product-detail/product-detail.component';
import {CartComponent} from './shopping/cart/cart.component';
import {ReviewComponent} from './shopping/review/review.component';
import {ThanksComponent} from './shopping/thanks/thanks.component';
// // import {CheckoutComponent} from './shopping/checkout/checkout.component';
// import {CreditCardPaymentComponent} from './shopping/checkout/credit-card-payment/credit-card-payment.component';
// import {PaypalPaymentComponent} from './shopping/checkout/paypal-payment/paypal-payment.component';
const memberRoutes: Routes = [
  // Member routes goes here
  {
    path: '',
    component: MemberBaseLayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'switchSchool/:schoolId/referer/:url', component: HomeComponent},
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
      {
        path: 'faculties', component: FacultiesComponent, children: [
          {path: ':id', component: FacultyDetailComponent}
        ]
      },
      {
        path: 'committees', component: CommitteesComponent, children: [
          {path: ':id', component: CommitteeDetailComponent}
        ]
      },
      {
        path: 'sponsors', component: SponsorsComponent, children: [
          {path: ':id', component: SponsorDetailComponent}
        ]
      },
      {path: 'profile', component: ProfileComponent},

      {path: 'shopping/stores', component:StoresComponent},
      {path: 'shopping/products/store/:store_id', component:ProductsComponent},  
      {path: 'shopping/product/:product_id', component:ProductDetailComponent},
      {path: 'shopping/cart', component:CartComponent},
      // {path: 'shopping/checkout',component:CheckoutComponent,children:[
      //   {path:'credit_payemnt',component:CreditCardPaymentComponent},
      //   {path:'paypal_payemnt',component:PaypalPaymentComponent}
      // ]},
      {path: 'shopping/review', component:ReviewComponent},
      {path: 'shopping/thanks', component:ThanksComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(memberRoutes)],
  exports: [RouterModule]
})
export class MemberAppRoutingModule {
}
