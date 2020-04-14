import { environment } from '../../../../environments/environment';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


import {MockDataService} from '../../../shared/mock-data.service';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';


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
    private auth: AuthService,
    private context: ContextService
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

    this.httpClient.post<any>(environment.apiEndPoint + '/login', data).subscribe(
      (response) => {
        console.log('Login response', response);
        this.context.auth = response.data.auth;
        this.context.member = response.data.member;
        this.context.guardian = response.data.guardian;
        this.context.family = response.data.family;
        this.context.students = response.data.students;
        this.context.schools = response.data.schools;
        this.context.domain = response.data.domain;
        localStorage.setItem('auth', JSON.stringify(response.data.auth));
        sessionStorage.setItem('context', JSON.stringify(response.data));
        console.log('this.context service', this.context);
        this.router.navigate(['/profile']);
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
