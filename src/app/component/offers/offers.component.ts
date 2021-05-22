import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServiceService} from "../../ProductService/service.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  productos: Producto[]=new Array();

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(){
    this.service.getOffers().subscribe(
      data => {
        this.productos = data;
      }
    )
  }
  info(produccto: Producto){

  }

}
