import { Component, OnInit } from '@angular/core';
import {Producto} from "../../model/producto";
import {ServiceService} from "../../ProductService/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productos: Producto[]=new Array();
  categoria = '';
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getByCategor()
  }
  info(producto: Producto){
    localStorage.setItem('selectProduct',JSON.stringify(producto));
    this.router.navigate(['productinfo']);
  }
  getByCategor(){
    this.categoria = JSON.parse(<string>localStorage.getItem('selectCategory'));
    this.service.getByCategory(this.categoria).subscribe(
      data => {
        this.productos = data;
      }
    )
  }

}
