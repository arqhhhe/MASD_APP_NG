import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'masd-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {

  sponsors;

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

    this.httpClient.get(environment.apiEndPoint + `/sponsors/${this.context.meta.current.school.id}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.sponsors = response;
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        console.log('HTTP request completed.');
      }
    );

  }

  loadDetail(sponsorId) {
    this.router.navigate(['sponsors', sponsorId]);
  }

}
