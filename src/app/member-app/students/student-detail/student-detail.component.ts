import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {MockDataService} from '../../../shared/mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'masd-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  public student;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    const studentId = this.route.snapshot.params['id'];
    this.loadDetail(studentId)

    this.route.params.subscribe(
      (params: Params) => {
        const sStudentId = params['id'];
        this.loadDetail(sStudentId);
      }
    );
  }

  loadDetail(studentId) {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + `/studentDetail/${studentId}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.student = response;
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        console.log('HTTP request completed.');
      }
    );

  }

}
