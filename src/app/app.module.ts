import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceService } from "./ProductService/service.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { OffersComponent } from './component/offers/offers.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import {FormsModule} from "@angular/forms";
import {InterceptorService} from "./interceptor/interceptor.service";
import { CarComponent } from './component/car/car.component';
import { ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CategoryComponent } from './component/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductInfoComponent,
    OffersComponent,
    LoginComponent,
    RegistroComponent,
    CarComponent,
    CategoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormsModule
    ],
  providers: [ServiceService,InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
