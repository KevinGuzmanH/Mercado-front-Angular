import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../model/producto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  ///URL = 'https://project2-back.herokuapp.com/tienda';
  /////////URL = 'https://mercadoback.herokuapp.com/tienda';
  URL = 'http://localhost:8080/tienda'
  getProducts(){
    return this.http.get<Producto[]> (this.URL+ '/productlist');
  }
  getOffers(){
    return this.http.get<Producto[]>(this.URL + '/offers');
  }
  productInfo(id: number){
    return this.http.get<Producto> (this.URL + '/getbyid/'+id);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.URL + /delete/+id, {responseType: "text"});
  }
  addToCar(Producto: Producto, userName: string):Observable<any>{
    return this.http.put('http://localhost:8080/auth/addToCar/' + userName, Producto,{responseType: "text"});
  }
  getProductsInCar(nombreUsuario: string){
    return this.http.get<Producto[]>('http://localhost:8080/auth/car/' + nombreUsuario);
  }
  getByCategory(categoria: string){
    return this.http.get<Producto[]>(this.URL + '/categoria/' + categoria);
  }
  deleteFromCar(Producto: number, userName: string):Observable<any>{
    return this.http.delete('http://localhost:8080/auth/deletefromcar/' + userName + '/' + Producto,{responseType: "text"});
  }

}
