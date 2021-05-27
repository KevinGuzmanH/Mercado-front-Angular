import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServTknService} from "../../serviceTkn/serv-tkn.service";
import {ServiceService} from "../../ProductService/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  producto: Producto = new Producto();
  isLogged = false;
  productoAdd = false;
  constructor(private ServTknService: ServTknService, private ServiceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getproduct()
    if (this.ServTknService.getToken()){
        this.isLogged = true;
    }
  }
  getproduct(){
    this.producto = JSON.parse(<string>localStorage.getItem('selectProduct'));
  }
  addToCar(producto: Producto){

    if (this.isLogged){
      let username: string = this.ServTknService.getUserName();
      this.ServiceService.addToCar(producto, username).subscribe(
        data => {
          this.productoAdd = true;
          this.router.navigate(['car']).then(
            () => {window.location.reload()}
          );
        },error => {
          console.log(error.message)
        }
      );
    }else {
      this.router.navigate(['/login']);
    }

  }
}
