import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'masd-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  public stores;
  public isproduct = 0;
  constructor(
    private router: Router,
    private activateRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService
  ) { }

  ngOnInit(): void {
    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }

    
    //console.log(this.context.guardian);
    this.httpClient.get(environment.apiEndPoint + `/store/${this.context.guardian.id}`, httpOptions).subscribe(
      (response) => {
          console.log('Success!');
          console.log(response);
          this.stores = response;
          console.log('this.stores', this.stores);
      },
      error => {
          console.log('Error!', error);
      },
      () => {
          console.log('HTTP request completed.');
      }
    );
  }

  loadProducts(store_id,school_id){
    //console.log(school_id);
    this.isproduct = 1;
    localStorage.setItem('school_id',school_id);
    localStorage.setItem('store_id',store_id);
    this.router.navigate(['../products','store',store_id],{relativeTo:this.activateRoute});
  }

}
