import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewUser} from "../model/newUser";
import {Observable} from "rxjs";
import {LoginUser} from "../model/loginUser";
import {JwtDto} from "../model/jwt-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthSservService {
  URL = 'http://localhost:5000/auth'
  constructor(private httpclient: HttpClient) { }

  public new(nuevoUser: NewUser):Observable<any> {
      return this.httpclient.post<any>(this.URL + '/nuevo', nuevoUser);
  }
  public login(User: LoginUser):Observable<JwtDto> {
    return this.httpclient.post<JwtDto>(this.URL + '/login', User);
  }
}
