import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialogFirstDataComponent } from './payment-dialog-first-data.component';

describe('PaymentDialogFirstDataComponent', () => {
  let component: PaymentDialogFirstDataComponent;
  let fixture: ComponentFixture<PaymentDialogFirstDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDialogFirstDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogFirstDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
