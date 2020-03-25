import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialogStripeComponent } from './payment-dialog-stripe.component';

describe('PaymentDialogStripeComponent', () => {
  let component: PaymentDialogStripeComponent;
  let fixture: ComponentFixture<PaymentDialogStripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDialogStripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
