import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../model/producto";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  ///URL = 'https://project2-back.herokuapp.com/tienda';
  URL = 'http://localhost:5000/tienda';
  getProducts(){
    return this.http.get<Producto[]> (this.URL+ '/productlist');
  }
  getOffers(){
    return this.http.get<Producto[]>(this.URL + '/offers');
  }
  productInfo(id: number){
    return this.http.get<Producto> (this.URL + '/getbyid/'+id);
  }

  deleteProduct(id: number){
    this.http.delete(this.URL + /delete/+id);
  }

}
