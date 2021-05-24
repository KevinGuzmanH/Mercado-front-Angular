import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProductInfoComponent} from "./component/product-info/product-info.component";
import {OffersComponent} from "./component/offers/offers.component";
import {LoginComponent} from "./component/login/login.component";
import {RegistroComponent} from "./component/registro/registro.component";
import { GuardService as guard} from "./guard/guard.service";

const routes: Routes = [
  {path: '', redirectTo: 'allproducts', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'allproducts', component: HomeComponent},
  {path: 'productinfo', component: ProductInfoComponent},
  {path: 'offers', component: OffersComponent},
  // {path: 'ruta', component: editar/eliminar, canActivate: [guard],data: {expectedRol:['admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
