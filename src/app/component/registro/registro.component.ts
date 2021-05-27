import { Component, OnInit } from '@angular/core';
import {LoginUser} from "../../model/loginUser";
import {Router} from "@angular/router";
import {ServTknService} from "../../serviceTkn/serv-tkn.service";
import {AuthSservService} from "../../authServ/auth-sserv.service";
import {NewUser} from "../../model/newUser";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  isLogged = false;
  isRegistered = false;
  isRegisterFail = false;
  registerUsuario: NewUser = new NewUser('','','','',[]);
  nombre = '';
  nombreUsuario = "";
  email = '';
  password = "";
  roles: string[] = ['user'];
  errorMs = '';

  constructor(private ServTknService: ServTknService,private AuthSservService: AuthSservService, private router: Router) { }

  ngOnInit(): void {
    if (this.ServTknService.getToken()){
      this.isLogged = true;
    };
  }

  onRegister(): void{
    this.registerUsuario.nombre = this.nombre;
    this.registerUsuario.nombreUsuario = this.nombreUsuario;
    this.registerUsuario.email = this.email;
    this.registerUsuario.password = this.password;
    this.registerUsuario.authorities = this.roles;
    this.AuthSservService.new(this.registerUsuario).subscribe(
      data => {
        this.isRegistered = true;
        this.isRegisterFail = false;
        this.errorMs = 'Cuenta Creada';
        this.router.navigate(['login']);
      },error => {
        this.isRegisterFail = true;
        this.isRegistered = false;
        this.errorMs = error.error;
        console.log(error);
      }
    )
  }

}
