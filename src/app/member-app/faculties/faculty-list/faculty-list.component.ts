import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';

@Component({
  selector: 'masd-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  faculties;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService
  ) { }

  ngOnInit() {
    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    console.log(httpOptions);
    this.httpClient.get(environment.apiEndPoint + `/faculties/${this.context.meta.current.school.id}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.faculties = Object.values(response);
        console.log('this.faculties', this.faculties);
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        console.log('HTTP request completed.');
      }
    );

  }

  loadDetail(facultyId) {
    this.router.navigate(['faculties', facultyId]);
  }

}
