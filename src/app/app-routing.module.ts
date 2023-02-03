import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ShoppingCartComponent } from '../app/components/shopping-cart/shopping-cart.component';




@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'carrito', component: ShoppingCartComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
