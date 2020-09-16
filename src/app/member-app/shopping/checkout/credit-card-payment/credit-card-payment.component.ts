import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../../shared/auth.service';
import {ContextService} from '../../../../shared/context.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,FormArray,FormGroup} from '@angular/forms';
import { CartService } from '../../../../shared/cart.service';


@Component({
  selector: 'masd-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {
  // @Input() tot_price;
  tot_price;
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private auth: AuthService,
    private context: ContextService,
    private formBuilder:FormBuilder,
    private cartservice:CartService,
  ) { 
      this.tot_price = this.cartservice.getTotalAmount();
  }

  ngOnInit(): void {
    console.log(this.tot_price);
  }

}
