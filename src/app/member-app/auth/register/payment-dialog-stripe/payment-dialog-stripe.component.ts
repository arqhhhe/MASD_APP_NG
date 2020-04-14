import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'masd-payment-dialog-stripe',
  templateUrl: './payment-dialog-stripe.component.html',
  styleUrls: ['./payment-dialog-stripe.component.scss']
})
export class PaymentDialogStripeComponent implements  OnDestroy, AfterViewInit{

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogStripeComponent>,
    private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){}


  onNoClick(): void {
    this.dialogRef.close();
  };

  /*--------------------------------------------------*/
  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
  // @ViewChild('students', {static: false}) students: NgModelGroup;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  stripe: any;
  elements: any;


  ngAfterViewInit() {
    this.stripe = (<any>window).Stripe('pk_test_iQ2nwFIkJ7hVVKtvtr5EPUNa002MnJ83gZ');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmitStripeForm(form: NgForm) {
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
      this.dialogRef.close(error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
      this.dialogRef.close(token);
    }
  }

}
