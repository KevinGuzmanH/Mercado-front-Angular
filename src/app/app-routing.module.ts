import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProductInfoComponent} from "./component/product-info/product-info.component";
import {OffersComponent} from "./component/offers/offers.component";

const routes: Routes = [
  {path: '', redirectTo: 'allproducts', pathMatch: 'full'},
  {path: 'allproducts', component: HomeComponent},
  {path: 'productinfo', component: ProductInfoComponent},
  {path: 'offers', component: OffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
