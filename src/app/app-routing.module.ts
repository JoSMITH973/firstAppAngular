import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CountriesComponent } from './list/countries/countries.component';
import { ProductsComponent } from './list/products/products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'livraison', component: CountriesComponent },
    { path: 'panier', component: CartComponent },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
