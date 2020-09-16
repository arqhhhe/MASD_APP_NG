import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'masd-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  store_id;
  products;
  products_length;
  default_size = 6;
  display_products;
  constructor(
    private router: Router,
    private activateRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService
  ) {}

  ngOnInit(): void {

    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
  
    console.log(this.activateRoute.snapshot.params.store_id);
    this.store_id = this.activateRoute.snapshot.params.store_id;
    
    this.httpClient.get(environment.apiEndPoint+`/products/${this.store_id}`,httpOptions).subscribe(
      (response)=>{
        
          this.products = response;
          this.display_products = this.products.slice(0,this.default_size);
          this.products_length = this.products.length;
          //console.log(this.products.length);
          console.log(this.products);
      },
      (error)=>{
        console.log(error);
      }

    );

  }

  onPaginateChange(event:PageEvent){
    console.log(event);
    this.default_size = event.pageSize;
     this.display_products = this.products.slice(event.previousPageIndex*this.default_size,event.pageIndex+this.default_size);
  }

  onDetailLoad(product_id){
    this.router.navigate(['shopping/product/',product_id]);
  }
}
