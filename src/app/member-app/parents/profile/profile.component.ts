import {environment} from '../../../../environments/environment';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ContextService} from '../../../shared/context.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'masd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public isPasswordChanged = false;
  private snackBarNotificationDuration = 5000;

  changePasswordForm = this.formBuilder.group({
    newPassword: [''],
  });

  permissionForm = this.formBuilder.group({
    streetAddress: [{value: true}],
    city: [{value: true}],
    state: [{value: true}],
    zip: [{value: true}],
    primaryPhone: [{value: true}],
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private context: ContextService,
    private snackBar: MatSnackBar,
  ) { }

  onSubmitChangePassword() {
    console.log('onSubmit');
    console.log('context', this.context);
    this.changePasswordForm.value.memberId = this.context.member.id
    console.warn(this.changePasswordForm.value);
    this.httpClient.post<any>(environment.apiEndPoint + '/changePassword', {changePasswordForm: this.changePasswordForm.value}).subscribe(
      (response) => {
        console.log('onSubmitChangePassword: response', response);
        if(response.status){
          this.isPasswordChanged = true;
          this.snackBar.open('Password changed successfully!', 'Close', {
            duration: this.snackBarNotificationDuration,
            verticalPosition: 'top'
          });
        } else {
          this.snackBar.open('Failed! password not changed', 'Close', {
            duration: this.snackBarNotificationDuration,
            verticalPosition: 'top'
          });
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

  onSubmitPermission() {
    console.log('onSubmitPermission');
    console.warn(this.permissionForm.value);
  }

}
