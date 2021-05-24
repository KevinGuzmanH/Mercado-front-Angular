import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServiceService} from "../../ProductService/service.service";
import {Router} from "@angular/router";
import {ServTknService} from "../../serviceTkn/serv-tkn.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreUser = '';

  productos: Producto[]=new Array();
  producto: Producto = new Producto();
  constructor(private service: ServiceService, private router: Router, private ServTknService: ServTknService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(
      data => {
        this.productos = data;this.productos.forEach(t => {
          console.log(t.descripcion)} );
      }
    )
  }
  isLogged():boolean{
   if (this.ServTknService.getToken()){
     this.nombreUser = this.ServTknService.getUserName();
     return true;
   }else {
     return false;
   }
  }
  info(producto: Producto){
    localStorage.setItem('selectProduct',JSON.stringify(producto));
    this.router.navigate(['productinfo']);
  }
  id(){
    this.router.navigate(['productinfo']);
  }
}
