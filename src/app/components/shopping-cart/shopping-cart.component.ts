import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  items;
  count:number = 0;
  constructor(public cartService:CartService) { 
    this.items = this.cartService.getItems();
  }

  ngOnInit() {

    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
  }
  
  alertWithSuccess(){  
    if (this.count > 0){
      Swal.fire('Enhorabuena', 'Tu compra ha sido realizada', 'success')
    }
    else{
      Swal.fire('Error', 'Indique la cantidad de entradas', 'error')
    }
      
  }  
  
  removeProduct(item: { id: string; }) :void{
    console.log(this.cartService)
    this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
    this.count= this.cartService.count;
  }
  chngQuantity():void{
    this.count= this.cartService.count;     
  }

}
