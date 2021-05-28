import { Component, OnInit } from '@angular/core';
import {ServTknService} from "../../serviceTkn/serv-tkn.service";
import {Producto} from "../../model/producto";
import {ServiceService} from "../../ProductService/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  isLogged = false;
  nombreUsuario = '';
  productos: Producto[] = new Array();
  productoDelete = false;
  constructor(private router: Router, private ServTknService: ServTknService,private ServiceService: ServiceService) { }

  ngOnInit(): void {
    if (this.ServTknService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.ServTknService.getUserName();
      this.ServiceService.getProductsInCar(this.nombreUsuario).subscribe(
        data => {
          if (data.length > 0){
            this.productos = data;
          }
        }
      )
    }
  }
  deleteFromCar(producto: number){
    if (this.isLogged){
      let username: string = this.ServTknService.getUserName();
      this.ServiceService.deleteFromCar(producto, username).subscribe(
        data => {
          this.productoDelete = true;
          this.router.navigate(['allproducts']).then(
            () => {window.location.reload()}
          );
        },error => {
          console.log(error.message);
          console.log(error);
        }
      );
    }else {
      this.router.navigate(['login']);
    }

  }
}
