import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,FormArray,FormGroup} from '@angular/forms';
import { CartService } from '../../../shared/cart.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'masd-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  payment_detail:any;
  order_detail:any;
  cartid:any;
  amount:any;
  response:any;
  domain_config:any;
  displayedColumns = ['product','name', 'qty', 'price','amount','student'];
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService,
    private formBuilder:FormBuilder,
    private cartservice:CartService,
  ) { }

  ngOnInit(): void {
    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      
      })
    }
      
      this.cartid = this.cartservice.getCartId();
      this.httpClient.get(environment.apiEndPoint+`/cart/${this.cartid}`,httpOptions).subscribe(
        (response) => {      
         // console.log(response);    
          this.order_detail = response;
          console.log(this.order_detail.cart_detail);
          //this.cart_detail = response.cart_detail;
          //this.domain_config = response.domain_payment_config;
          this.amount = this.cartservice.getTotalAmount();

        }
      );
  }

  placeOrder():void{
    console.log(this.order_detail);

    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      
      })
    }
    this.payment_detail = JSON. parse(localStorage.getItem('stripe_credentials'));
    const data = {
      stripe_payment:this.payment_detail,
      domain_id : this.order_detail.cart_detail[0].domain_id,
      school_id : localStorage.getItem('school_id'),
      member : this.order_detail.member,
      tot_amount : this.amount,
      tot_cost : this.cartservice.getTotalCost(),
      cart_id : this.cartid
    }
    //const data_obj = new FormData();
   // data_obj.append('order',data);
   console.log(this.order_detail);
    if(this.payment_detail.name == 'Stripe'){
      this.httpClient.post<any>(environment.apiEndPoint+`/stripe`,data,httpOptions).subscribe(
        (response) =>{
          if(response.status){
            console.log(response);
            this.response = response.message;
          }
        },
        (error)=>{
          console.log(error)
        }

      );
    }
  }

  back():void{
    this.router.navigate(['../shopping/cart']);
  }

}
