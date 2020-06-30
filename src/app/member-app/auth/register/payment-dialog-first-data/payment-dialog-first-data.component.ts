import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'masd-payment-dialog-first-data',
  templateUrl: './payment-dialog-first-data.component.html',
  styleUrls: ['./payment-dialog-first-data.component.css']
})
export class PaymentDialogFirstDataComponent implements OnInit {

  firstDataCCInfoForm = this.formBuilder.group({
    cardType: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, Validators.maxLength(16)]],
    expireMonth: ['', [Validators.required, Validators.maxLength(2)]],
    expireYear: ['', [Validators.required, Validators.maxLength(4)]],
    cvc: ['', [Validators.required, Validators.maxLength(3)]],
  });

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogFirstDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  };

  onSubmitFirstDataCCInfoForm() {

    console.log('onSubmitFirstDataCCInfoForm triggered!');
    console.log('this.firstDataCCInfoForm.value', this.firstDataCCInfoForm);

    if(this.firstDataCCInfoForm.valid){
      this.dialogRef.close(this.firstDataCCInfoForm.value);
    }

  }

}
