import { Injectable } from '@angular/core';
import { Product, CartProduct } from '../types/product';
import { Subject }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartProduct[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
  };

  constructor() { }

  add(product:Product){

    let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;
 
    if(item){ item.qty ++ } else {
      (product as CartProduct).qty = 1;
      this.cartItmes.push(product as CartProduct)
    }
    this.cartUpdates.next(item.title);
    console.log(this.cartItmes)
   }
   getItems() {
    return this.cartItmes;
  }
}
