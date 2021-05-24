import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {ServTknService} from "../serviceTkn/serv-tkn.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  Rol: string = 'user';
  constructor(private ServTknService:ServTknService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
      const expectedRol = route.data.expextedRol;
      const rols = this.ServTknService.getAuthorities();
      rols.forEach(rol => {
        if (rol === 'ROLE_ADMIN'){
          this.Rol = 'admin';
        }
      });
      if (!this.ServTknService.getToken() || expectedRol.indexOf(this.Rol) === -1){
        this.router.navigate(['allproducts']);
        return false;
      }return true;
  }
}
