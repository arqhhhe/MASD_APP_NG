import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {ContextService} from '../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,FormArray,FormGroup} from '@angular/forms';
import { CartService } from '../../../shared/cart.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
// import {CheckoutComponent} from '../checkout/checkout.component';
import {PaymentDialogStripeComponent} from '../../auth/register/payment-dialog-stripe/payment-dialog-stripe.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms'; 
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'masd-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartid;
  cart_detail;
  cartform:FormGroup;
  updated_cart_qty;
  tot_price = 0;
  tot_cost = 0;
  update_response = '';
  domain_config:any;
  payment_methods:any;
  member:any;
  length:any;
  payment_option:any;
  item_detail=[];
  public payPalConfig?: IPayPalConfig;
  showSuccess:any;
  private snackBarNotificationDuration = 5000;


  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService,
    private formBuilder:FormBuilder,
    private cartservice:CartService,
    public dialog:MatDialog,
    private snackBar: MatSnackBar,
    // public dialogConfig:MatDialogConfig,
  ) {
    this.payment_methods = this.formBuilder.group({
      payment_method:''
    });
  }

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
  ngOnInit(): void {
    this.cartid = this.cartservice.getCartId();
   
    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      
      })
    }
    const data = {name:'',quantity:'',category:'',unit_amount:{
        currency_code:'USD',
        value:''
    }
  }
    this.httpClient.get(environment.apiEndPoint+`/cart/${this.cartid}`,httpOptions).subscribe(
      (response) => {
        this.cart_detail = response;
      
        this.cart_detail.cart_detail.forEach((item, index) =>{
          console.log(this);
          this.tot_price += (item.price * item.qty);
          this.tot_cost += (item.cost*item.qty);
          data.name = item.product_name;
          data.quantity = item.qty;
          data.category = item.product_name;
          data.unit_amount.value = item.price;

          this.item_detail.push(data);
          
        });
        console.log(this);
        this.cartservice.setTotalAmout(this.tot_price);
        this.cartservice.setTotalCost(this.tot_cost);
      }

    );
      this.initConfig();
  }

  cartUpdate(event:Event,index,id){
     this.updated_cart_qty = (<HTMLInputElement>event.target).value;
     //console.log(id);
     const data = 
     {
       qty : this.updated_cart_qty,
       cartid:id
     }

     const token = this.auth.getToken(); 
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': 'Bearer ' + token,
       
       })
     }
      this.httpClient.post(environment.apiEndPoint+'/updateCart',data,httpOptions).subscribe(
        (response)=>{
          console.log(response);
          if(response){
            this.update_response = "your cart updated successfully";
            this.ngOnInit();
            console.log(this.update_response);
          }
        },
        (error)=>{
          console.log(error);
        }
  
      );
     
     
  }


  deletCart(id){
    
    const token = this.auth.getToken(); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      
      })
    }
     this.httpClient.get(environment.apiEndPoint+`/deleteCart/${id}`,httpOptions).subscribe(
       (response)=>{
         console.log(response);
         if(response){
           this.update_response = "your cart deleted successfully";
           console.log(this.update_response);
           this.tot_price = 0;
           this.ngOnInit();
         }
       },
       (error)=>{
         console.log(error);
       }
 
     );

  }


openPaymentDialog(): void {
  console.log(this.payment_methods.value.payment_method);
  console.log("openStripePaymentDialog");
  const dialogRef = this.dialog.open(PaymentDialogStripeComponent, {
    width: '400px',
    disableClose: true, 
    autoFocus: true,
    data: {
      totalAmount: this.tot_price,
    }
  }); 

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    if ('object' in result && result.object === 'token') {
      const credentials = {name:'Stripe',meta:result};
      localStorage.setItem('stripe_credentials',JSON.stringify(credentials));
      this.router.navigate(['../shopping/review']);
    } else {
      this.snackBar.open(result.message, 'Close', {
        duration: this.snackBarNotificationDuration,
        verticalPosition: 'bottom'
      });
    }
  });
}

showingCheckOut(value):void{
  this.payment_option = value
}

private initConfig(): void {
  this.payPalConfig = {
  currency: 'USD',
  clientId: 'sb',
  createOrderOnClient: (data) => <ICreateOrderRequest>{
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: this.tot_price.toString(),
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: this.tot_price.toString(),
            }
          }
        },
        items: this.item_detail
      }
    ]
  },
  advanced: {
    commit: 'true'
  },
  style: {
    label: 'paypal',
    layout: 'vertical'
  },
  onApprove: (data, actions) => {
    console.log('onApprove - transaction was approved, but not authorized', data, actions);
    actions.order.get().then(details => {
      console.log('onApprove - you can get full order details inside onApprove: ', details);
    });
  },
  onClientAuthorization: (data) => {
    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    this.showSuccess = true;
  },
  onCancel: (data, actions) => {
    console.log('OnCancel', data, actions);
  },
  onError: err => {
    console.log('OnError', err);
  },
  onClick: (data, actions) => {
    console.log('onClick', data, actions);
  },
};
}

}
