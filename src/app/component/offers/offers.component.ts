import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServiceService} from "../../ProductService/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  productos: Producto[]=new Array();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }
  info(producto: Producto){
    localStorage.setItem('selectProduct',JSON.stringify(producto));
    this.router.navigate(['productinfo']);
  }
  getOffers(){
    this.service.getOffers().subscribe(
      data => {
        this.productos = data;
      }
    )
  }


}
