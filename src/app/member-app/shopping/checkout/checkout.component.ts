// import { Component, ChangeDetectorRef,Inject,ViewChild,ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
// import {NgForm} from '@angular/forms';
// import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
// //import {FormBuilder} from '@angular/forms';


// @Component({
//   selector: 'masd-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements AfterViewInit,OnDestroy {
//  // @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
//   creditpaymentform;
//   paypalpaymentform;
//   is_paypal;
//   is_credit;
//   stripe:any;

//   card: any;
//   cardHandler = this.onChange.bind(this);
//   error: string;
//   elements: any;

//   constructor(
//     private cd: ChangeDetectorRef,
//    // private formBuilder: FormBuilder,
//     public dialogRef: MatDialogRef<CheckoutComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//     ) {
//     //  this.creditpaymentform = formBuilder.group({
//     //     card_no:'',
//     //     cvc_code:'',
//     //     end_date:'',
//     //   });
//     }
//     onNoClick(): void {
//       this.dialogRef.close();
//     };
//    @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
  
//     ngAfterViewInit(): void {
//       this.is_credit = 1; 
//       //console.log();
//       console.log((<any>window).Stripe);
//       this.stripe = (<any>window).Stripe('pk_test_iQ2nwFIkJ7hVVKtvtr5EPUNa002MnJ83gZ');
//       this.elements = this.stripe.elements();
//       this.card = this.elements.create('card');
//       console.log(this.cardInfo);
//       this.card.mount(this.cardInfo.nativeElement);
  
//       this.card.addEventListener('change', this.cardHandler);
//       console.log(this.stripe);
//   }

//   ngOnDestroy() {
//     this.card.removeEventListener('change', this.cardHandler);
//     this.card.destroy();
//   }

//   // getCreditForm(){
//   //   this.is_paypal = 0;
//   //   this.is_credit = 1;
//   // }
//   // getPaypalForm(){
//   //   this.is_paypal = 1;
//   //   this.is_credit = 0;
//   // }


//   onSubmitCredit(checkout){
  
//     // const handler = (<any>window).Stripe.configure({
//     //   key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
//     //   locale: 'auto',
//     // });

//     // handler.open({
//     //   name: 'MobileArq',
//     //   description: 'Registration Payment',
//     //   amount: 1000
//     // });

//     console.log(checkout);
//   }
//   onSubmitPayPal(paypalpaymentform){
    
//   }

//   onChange({ error }) {
//     if (error) {
//       this.error = error.message;
//     } else {
//       this.error = null;
//     }
//   //   this.cd.detectChanges();
//    }
// // 
   
// }
