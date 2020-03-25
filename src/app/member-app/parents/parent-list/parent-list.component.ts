import { environment } from '../../../../environments/environment';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

import {MockDataService} from '../../../shared/mock-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'masd-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {

  @Output() detailLoaded = new EventEmitter<{id: number}>();

  parents;

  constructor(
    private mockData: MockDataService,
    private router: Router,
    private httpClient: HttpClient,
    private auth: AuthService
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
        this.parents = response;
      },
      error => {
        console.log('Error!', error);
      },
      () => {
        // console.log('Complete!');
        // console.log('HTTP request completed.');
      }
    );


    // parents = this.mockData.parents;
  }

  loadDetail(familyId) {
    this.detailLoaded.emit({id: familyId});
    this.router.navigate(['parents', familyId]);

  }


}
