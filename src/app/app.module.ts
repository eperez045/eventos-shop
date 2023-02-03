import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';


export function dataFactory(provider: ProductService) {
  return () => provider.getAll();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    ProductService,
    {
      provide: APP_INITIALIZER,
      useFactory: dataFactory,
      deps: [ProductService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
