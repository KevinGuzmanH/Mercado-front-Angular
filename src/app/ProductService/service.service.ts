import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../model/producto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  URL = 'https://mercado-back.herokuapp.com/'
  getProducts(){
    return this.http.get<Producto[]> (this.URL+ 'tienda/productlist');
  }
  getOffers(){
    return this.http.get<Producto[]>(this.URL + 'tienda/offers');
  }
  productInfo(id: number){
    return this.http.get<Producto> (this.URL + 'tienda/getbyid/'+id);
  }
  updateProduct(): Observable<any>{
    return this.http.put(this.URL + '/updateproduct',new Producto(), {responseType: "text"});
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.URL + 'tienda/delete/'+id, {responseType: "text"});
  }
  addToCar(Producto: Producto, userName: string):Observable<any>{
    return this.http.put(this.URL + 'auth/addToCar/' + userName, Producto,{responseType: "text"});
  }
  getProductsInCar(nombreUsuario: string){
    return this.http.get<Producto[]>(this.URL + 'auth/car/' + nombreUsuario);
  }
  getByCategory(categoria: string){
    return this.http.get<Producto[]>(this.URL + 'tienda/categoria/' + categoria);
  }
  deleteFromCar(Producto: number, userName: string):Observable<any>{
    return this.http.delete(this.URL + 'auth/deletefromcar/' + userName + '/' + Producto,{responseType: "text"});
  }

}
