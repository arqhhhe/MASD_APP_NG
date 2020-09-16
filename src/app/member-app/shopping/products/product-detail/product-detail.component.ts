import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../../shared/auth.service';
import {ContextService} from '../../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {CartService} from '../../../../shared/cart.service';
@Component({
  selector: 'masd-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  product_id;
  children;
  cartForm;
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService,
    private formBuilder:FormBuilder,
    private cart:CartService
  ) {
    this.cartForm = this.formBuilder.group({
        qty:'',
        child:''
    });
   }

  ngOnInit(): void {

    const token = this.auth.getToken(); 
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
    })
    }
    this.product_id = this.activeRoute.snapshot.params.product_id;
    this.httpClient.get(environment.apiEndPoint+`/product/${this.product_id}_${this.context.guardian.id}`,httpOptions).subscribe(
      (response)=>{
        ///console.log(response);
        this.product = response[0];
        this.children = response[1];
        console.log(this.product.store);
      },
      (error)=>{
        console.log(error);
      })
  }

  onSubmit(cartData){
    //console.log(cartData);
    
    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      
      })
    }
    
    const cart_item = {
      cartid:this.cart.getCartId(),
      pid:this.product_id,
      child_id:cartData.child,
      qty:cartData.qty,
      member:this.context.member.id,
      school_id:this.product.school_id,
      domain_id:this.product.domain_id,
      store_id:this.product.store.id,
      email:this.context.member.email
    }

    this.httpClient.post<any>(environment.apiEndPoint+`/cart`,cart_item,httpOptions).subscribe(
      (response)=>{
        console.log(response);
          this.cart.setCartId(response.data.cart);
          this.router.navigate(['../../shopping/cart']);
      },
      (error)=>{
        console.log(error);
      }

    );
  }

}
