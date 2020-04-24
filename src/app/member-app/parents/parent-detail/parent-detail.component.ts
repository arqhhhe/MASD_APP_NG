import { environment } from '../../../../environments/environment';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MockDataService} from '../../../shared/mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'masd-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.scss']
})
export class ParentDetailComponent implements OnInit {


  parent;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    const familyId = this.route.snapshot.params['id'];
    this.loadDetail(familyId)

    this.route.params.subscribe(
      (params: Params) => {
        const sFamilyId = params['id'];
        this.loadDetail(sFamilyId);
      }
    );
  }

  loadDetail(familyId) {

    const token = this.auth.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    this.httpClient.get(environment.apiEndPoint + `/parentDetail/${familyId}`, httpOptions).subscribe(
      (response) => {
        // console.log('Success!');
        // console.log(response);
        this.parent = response;
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
