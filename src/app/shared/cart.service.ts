import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private tot_amount;
  private tot_cost;
  getCartId(){
    const cart = localStorage.cartid;
    return cart
  }
  setCartId(cartid){
    localStorage.setItem('cartid',cartid);
  }
  setTotalAmout(amount){
    this.tot_amount = localStorage.setItem('tot_amount',amount);
  }
  getTotalAmount(){
    return localStorage.getItem('tot_amount');
  }
  setTotalCost(amount){
    this.tot_amount = localStorage.setItem('tot_cost',amount);
  }
  getTotalCost(){
    return localStorage.getItem('tot_cost');
  }
  
}
