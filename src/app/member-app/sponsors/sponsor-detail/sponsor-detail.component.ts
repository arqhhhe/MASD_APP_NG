import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'masd-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.scss']
})
export class SponsorDetailComponent implements OnInit {

  sponsor;
  imageSrc;
  avatar;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit() {
    const sponsorId = this.route.snapshot.params['id'];
    this.loadDetail(sponsorId);

    this.route.params.subscribe(
      (params: Params) => {
        const sSponsorId = params['id'];
        this.loadDetail(sSponsorId);
      }
    );
  }

  loadDetail(sponsorId) {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + `/sponsorDetail/${sponsorId}`, httpOptions).subscribe(
      (response) => {
        console.log('Success!');
        console.log(response);
        this.sponsor = response;
        this.imageSrc = environment.baseUrl + this.sponsor.image_url;
        this.avatar = {'background-image': 'url(' + this.imageSrc + ')', 'background-size': 'cover'} ;
        console.log('this.sponsor', this.sponsor);
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
