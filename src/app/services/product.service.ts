import { Injectable } from '@angular/core';
import { products } from '../events-info';
import { Product } from '../types/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: any;
  
  constructor(public http: HttpClient) { }

  public getAll():void{
    this.http.get("assets/events.json").subscribe(data =>{
      this.products = data;    
    })
  }
}
