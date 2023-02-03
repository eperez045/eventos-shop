import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   products!: any;

  constructor( 
    public http: HttpClient,
    public productService: ProductService,
    public cartService:CartService) {
  
    }
  
    ngOnInit() {
      // let id = this.route.snapshot.paramMap.get('id');
      this.http.get("assets/events.json").subscribe(data =>{
        this.products = data;    
      })
    }
  
    addToCart(product:Product) : void{
       this.cartService.add(product);
    }
}
