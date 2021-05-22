import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  producto: Producto = new Producto();
  constructor() { }

  ngOnInit(): void {
    this.getproduct()
  }
  getproduct(){
    this.producto = JSON.parse(<string>localStorage.getItem('selectProduct'));
  }
}
