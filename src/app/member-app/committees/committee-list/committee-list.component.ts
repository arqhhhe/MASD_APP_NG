import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import {environment} from '../../../../environments/environment';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'masd-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent implements OnInit {

  committees;

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
    
    this.httpClient.get(environment.apiEndPoint + `/committees/${this.context.meta.current.school.id}`, httpOptions).subscribe(
      (response) => {
        
        console.log('Success!');
        console.log(response);
        this.committees = response;
        console.log('this.committees', this.committees);
      },
      error => {
        console.log('Error!', error);
        
      },
      () => {
        console.log('HTTP request completed.');
      }
    );

  }

  loadDetail(committeeId) {
    this.router.navigate(['committees', committeeId]);
  }

}
