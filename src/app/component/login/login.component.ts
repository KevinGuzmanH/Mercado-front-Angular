import { Component, OnInit } from '@angular/core';
import {ServTknService} from "../../serviceTkn/serv-tkn.service";
import {AuthSservService} from "../../authServ/auth-sserv.service";
import {LoginUser} from "../../model/loginUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoggingFail = false;
  loginUsuario: LoginUser = new LoginUser('nombre','password');
  nombreUsuario = "";
  password = "";
  roles: string[] = [];
  errorMs = '';

  constructor(private ServTknService: ServTknService,private AuthSservService: AuthSservService, private router: Router) { }

  ngOnInit(): void {
    if (this.ServTknService.getToken()){
      this.isLogged = true;
      this.isLoggingFail = false;
      this.roles = this.ServTknService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario.nombreUsuario = this.nombreUsuario;
    this.loginUsuario.password = this.password;
    this.AuthSservService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoggingFail = false;
        this.ServTknService.setToken(data.token);
        this.ServTknService.setUserName(data.nombreUsuario);
        this.ServTknService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['allproducts']).then(() => {window.location.reload()});
      },error => {
        this.isLogged = false;
        this.isLoggingFail = true;
        if (error.error.error){
          this.errorMs = 'Error al iniciar sesión, compruebe los campos nuevamente';
        }
      }
    )
  }



}
