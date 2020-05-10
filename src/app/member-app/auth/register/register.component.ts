import {environment} from '../../../../environments/environment';
import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, AfterContentChecked, OnDestroy, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {MockDataService} from '../../../shared/mock-data.service';
import {MatDialog, MatStepper} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm, NgModel, NgModelGroup} from '@angular/forms';
import {PaymentDialogStripeComponent} from './payment-dialog-stripe/payment-dialog-stripe.component';
import * as _ from 'lodash';

@Component({
  selector: 'masd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  public studentsFormGroup: { id: number }[] = [{id: -1}];
  public disableRegisterButton: Boolean = true;
  private data: any = {};
  private isEditable = true;
  private isCodeCompleted = false;
  private isConsentCompleted = false;
  private snackBarNotificationDuration = 5000;
  public paymentDetail: any = {items: [], total: 0};
  private domain: any;
  public  selectListValues: {states: {id: any, name: any}[], schools: {id: any, name: any, member_fee: any}[], grades: {id: any, name: any}[]} = { states: [], schools: [], grades: []};
  public isProfileExist = false;
  public isRegistrationSuccessful = false;
  public isMemberExist = false;


  @ViewChild('registrationForm', {static: false}) registrationForm: NgForm;
  @ViewChild('user', {static: false}) user: NgModelGroup;
  @ViewChild('address', {static: false}) address: NgModelGroup;
  @ViewChild('students', {static: false}) students: NgModelGroup;
  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;


  constructor(
    private router: Router,
    private mockData: MockDataService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) {
  }

  hideable(action) {
    switch (action) {
      case  'show':
        $('.hideable').closest('.mat-step').show();
        $('.payment').closest('.mat-step').find(' .mat-step-icon-state-number').find('.ng-star-inserted').html('7');
        break;
      case 'hide':
        $('.hideable').closest('.mat-step').hide();
        setTimeout(() => {
          $('.payment').closest('.mat-step').find(' .mat-step-icon-state-number').find('.ng-star-inserted').html('4');
        }, 700);

        break;
    }
  }

  ngOnInit() {
    // this.hideable('hide');
  }

  ngAfterViewInit(): void {
    this.hideable('hide');
  }


  onAddStudent() {
    const id = this.studentsFormGroup[this.studentsFormGroup.length - 1].id + 1;
    this.studentsFormGroup.push({id: id});
  }

  onRemoveChild(event, index) {
    this.studentsFormGroup.splice(index, 1);
  }

  openCheckout() {
    const me = this;
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        me.disableRegisterButton = false;
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'MobileArq',
      description: 'Registration Payment',
      amount: 1000
    });
  }

  openCheck() {
    // const me = this;
    // me.disableRegisterButton = false;

    this.onSubmit(this.registrationForm, {method: 'check', meta: null});
  }

  getAndSetSelectListValues(domainId) {
    this.httpClient.get<{status: any, data: any, meta: any}>(`${environment.apiEndPoint}/selectListValues/${domainId}`).subscribe(
      response => {
        console.log('getAndSetSelectListValues: response', response);
        // @ts-ignore
        if (response.status) {
          this.selectListValues = response.data;
        } else {
          console.log('getAndSetSelectListValues: no data', response);
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onValidateCode(stepper: MatStepper, code) {
    this.httpClient.get<{status: any, data: any, meta: any}>(`${environment.apiEndPoint}/code/${code}`).subscribe(
      response => {
        console.log('response', response);
        // @ts-ignore
        if (response.status && JSON.parse(response.data.config).code === code) {
          this.domain = response.data;
          this.isCodeCompleted = true;
          this.getAndSetSelectListValues(this.domain.id);

          setTimeout(() => {
            stepper.next();
          }, 100);
        } else {
          this.snackBar.open('Security code does not exist!', 'Close', {
            duration: this.snackBarNotificationDuration,
            verticalPosition: 'top'
          });
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onValidateConsent(stepper: MatStepper, grantPermission, acquireAccess, termsAndCondition) {
    console.log(grantPermission.checked, acquireAccess.checked, termsAndCondition.checked);
    if (!termsAndCondition.checked) {
      this.snackBar.open('You must agree with Terms and condition', 'Close', {
        duration: this.snackBarNotificationDuration,
        verticalPosition: 'top'
      });
      return false;
    }
    if (!(grantPermission.checked || acquireAccess.checked)) {
      this.snackBar.open('You must agree with at least one of first tow consents', 'Close', {
        duration: this.snackBarNotificationDuration,
        verticalPosition: 'top'
      });
      return false;
    }

    this.isConsentCompleted = true;
    setTimeout(() => {
      stepper.next();
    }, 100);
  }

  setPaymentData(memberData) {
    this.data.students.forEach(student => {
      // const {domain_id, domain, school_id, school, member_fee} = student;
      const pickedPaymentData = _.pick(student, ['domain_id', 'domain', 'school_id', 'school', 'member_fee']);
      this.pushUniqueItem(pickedPaymentData);
      this.paymentDetail.total += parseFloat(pickedPaymentData.member_fee || '0.00');
      console.log('pickedPaymentData', pickedPaymentData);

    });
    this.paymentDetail.total = this.paymentDetail.total.toFixed(2);
    console.log('this.paymentData', this.paymentDetail);
  }

  onValidateEmail(stepper: MatStepper, email) {

    console.log('stepper', stepper);
    console.log('user', this.user);
    console.log('address', this.address);
    console.log('students', this.students);

    this.httpClient.get<{ status: any, data: any, meta: any }>(`${environment.apiEndPoint}/email/${email}`).subscribe(
      response => {
        console.log('onValidateEmail: response', response);
        // @ts-ignore
        if (response.status) {
          if (response.meta.member_exists) {
            this.isMemberExist = true;
            return;
          }
          if (!response.meta.payment_required) {
            this.isRegistrationSuccessful = true;
            return;
          }
          this.isProfileExist = true;
          this.isEditable = false;
          this.data = response.data;

          this.setPaymentData(this.data);

          // add students before populate data and move to students
          for (let i = 1; i < this.data.students.length; i++) {
            this.onAddStudent();
          }


          stepper.next(); // to personal information
          setTimeout(() => {
            this.populateForm(response.data); // populate before move to next step that is students
            stepper.next(); // to address
            stepper.next(); // to students
            stepper.next(); // to payment
          }, 100);

        } else {
          this.hideable('show');
          stepper.next();
        }
      },
      error => {
        console.log('error', error);
      }
    );
  }

  populateForm(data) {
    const me = this;
    this.user.control.setValue({
      familyName: data.family.name,
      firstName: data.parent.first_name,
      middleName: data.parent.middle_name,
      lastName: data.parent.last_name,
      suffix: data.parent.salutation
    });

    this.address.control.setValue({
      streetAddress: data.parent.address,
      city: data.parent.city,
      state: data.parent.state_id,
      zip: data.parent.zip,
      primaryPhone: data.parent.phone,
      cellPhone: ''
    });



    const studdentsValue = {};
    data.students.forEach(function (student, i) {
      studdentsValue['studentFirstName_' + i] = student.first_name || ' ';
      studdentsValue['studentMiddleName_' + i] = student.middle_namec || ' ';
      studdentsValue['studentLastName_' + i] = student.last_name || ' ';
      studdentsValue['suffix_' + i] = student.salutation || ' ';
      studdentsValue['school_' + i] = student.school_id || ' ';
      studdentsValue['grade_' + i] = student.grade_id || ' ';
      studdentsValue['lwp_' + i] = '';
      studdentsValue['homeRoom_' + i] = '';
      studdentsValue['sports_' + i] = '';
    });
    console.log('studdentsValue', studdentsValue);
    me.students.control.setValue(studdentsValue);

  }

  pushUniqueItem(item) {
    console.log('pushUniqueItem: item', item);
    const index = this.paymentDetail.items.findIndex(x => x.school_id == item.school_id);
    console.log('pushUniqueItem: index', index);
    if (index === -1) {
      this.paymentDetail.items.push(item);
    } else {
      console.log('object already exists', item);
    }
  }

  setPaymentDetails(registrationForm: NgForm) {
    const schoolIds = [];
    for (const key in registrationForm.value.students) {
      if (/school_\d+/i.test(key)) {
        schoolIds.push(registrationForm.value.students[key]);
      }
    }
    console.log('schoolIds', schoolIds);
    let total = 0;
    this.selectListValues.schools.forEach(school => {
      schoolIds.forEach(schoolId => {
        if (school.id == schoolId) {

          this.pushUniqueItem({
            domain_id: this.domain.id,
            domain: this.domain.name,
            school_id: school.id,
            school: school.name,
            member_fee: school.member_fee,
          });

          total += parseFloat(school.member_fee);
        }
      });
    });
    this.paymentDetail.total = total.toFixed(2);
  }

  onGotoPayment(stepper: MatStepper) {
    this.setPaymentDetails(this.registrationForm);
    stepper.next();
  }

  onSubmit(registrationForm: NgForm, paymentMethod) {

    const payment = this.paymentDetail;
    payment.paymentMethod = paymentMethod;

    registrationForm.value.payment = payment;
    console.log('registrationForm.value', registrationForm.value);

    const data = new FormData();
    data.append('registrationForm', registrationForm.value);

    console.log(environment.apiEndPoint);

    this.httpClient.post<any>(environment.apiEndPoint + '/register', {registrationForm: registrationForm.value}).subscribe(
      (response) => {
        console.log('onSubmit: response', response);
        if (response.status) {
          this.isRegistrationSuccessful = true;
        }
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        console.log('Complete!');
        console.log('HTTP request completed.');
      }
    );

  }



  openStripePaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentDialogStripeComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: true,
      data: {
        totalAmount: this.paymentDetail.total,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if ('object' in result && result.object === 'token') {
        this.onSubmit(this.registrationForm, {method: 'stripe', meta: result});
      } else {
        this.snackBar.open(result.message, 'Close', {
          duration: this.snackBarNotificationDuration,
          verticalPosition: 'bottom'
        });
      }
    });
  }
}
