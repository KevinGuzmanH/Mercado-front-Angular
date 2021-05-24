import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServTknService} from "../serviceTkn/serv-tkn.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private ServTknService:ServTknService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.ServTknService.getToken();
    if (token != null){
      intReq = req.clone({headers: req.headers.set('Authorization','Bearer '+token)});
    }
    return next.handle(intReq);
  }
}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, usClass: InterceptorService,multi: true}];
