import { environment } from '../../../../environments/environment';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


import {MockDataService} from '../../../shared/mock-data.service';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/auth.service';


@Component({
  selector: 'masd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  public error = false;

  constructor(
    private router: Router,
    private mockData: MockDataService,
    private httpClient: HttpClient,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    if(this.auth.isLogedIn()){
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.error = false;
    const data = new FormData();
    data.append('email', this.loginForm.value.email);
    data.append('password', this.loginForm.value.password);

    console.log(environment.apiEndPoint);

    this.httpClient.post(environment.apiEndPoint + '/login', data).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        localStorage.setItem('auth', JSON.stringify(response));
        this.router.navigate(['/']);
      },
      error => {
        this.error = true;
        console.log('Error!', error);
      },
      () => {
        console.log('Complete!');
        console.log('HTTP request completed.');
      }
    );
  }


}
