import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'masd-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.scss']
})
export class FacultyDetailComponent implements OnInit {

  faculty;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit() {
    const facultyId = this.route.snapshot.params['id'];
    this.loadDetail(facultyId)

    this.route.params.subscribe(
      (params: Params) => {
        const sFacultyId = params['id'];
        this.loadDetail(sFacultyId);
      }
    );
  }

  loadDetail(facultyId) {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + `/facultyDetail/${facultyId}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.faculty = response;
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
