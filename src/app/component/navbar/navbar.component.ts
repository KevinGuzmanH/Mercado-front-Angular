import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServTknService} from "../../serviceTkn/serv-tkn.service";
import {ServiceService} from "../../ProductService/service.service";
import {Producto} from "../../model/producto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = false;
  hasProductos = false;
  nombreUsuario: string = '';
  constructor(private router: Router, private ServTknService: ServTknService,private ServiceService: ServiceService) { }

  ngOnInit(): void {
    if (this.ServTknService.getToken()){
      this.logged = true;

      this.nombreUsuario = this.ServTknService.getUserName();
      this.ServiceService.getProductsInCar(this.nombreUsuario).subscribe(
        data => {
          if (data.length > 0){
            this.hasProductos = true;
          }
        }
      )
    }

  }
  onLogOut():void {
    this.ServTknService.logOut();
    window.location.reload();
  }
  category(categoria: string){
    localStorage.setItem('selectCategory',JSON.stringify(categoria));
  }
  goHome(){
    this.router.navigate(['allproducts'])
  }
  id(){
    this.router.navigate(['productinfo']);
  }
  offers(){
    this.router.navigate(['offers']);
  }
}
