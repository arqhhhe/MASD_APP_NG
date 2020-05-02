import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'masd-committee-detail',
  templateUrl: './committee-detail.component.html',
  styleUrls: ['./committee-detail.component.scss']
})
export class CommitteeDetailComponent implements OnInit {

  committee;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit() {
    const committeeId = this.route.snapshot.params['id'];
    this.loadDetail(committeeId)

    this.route.params.subscribe(
      (params: Params) => {
        const sCommitteeId = params['id'];
        this.loadDetail(sCommitteeId);
      }
    );
  }

  loadDetail(committeeId) {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + `/committeeDetail/${committeeId}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.committee = response;
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
