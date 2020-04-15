import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MockDataService} from '../../../shared/mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'masd-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students;

  constructor(
    private mockData: MockDataService,
    private router: Router,
    private  auth: AuthService,
    private  httpClient: HttpClient
  ) {
  }

  ngOnInit() {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + '/parents', httpOptions).subscribe(
      (response) => {
        // console.log('Success!');
        // console.log(response);
        this.students = response;
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        console.log('HTTP request completed.');
      }
    );

    // this.students = this.mockData.students;
  }

  loadDetail(studentId) {
    this.router.navigate(['students', studentId]);
  }

}
