import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServTknService} from "../../serviceTkn/serv-tkn.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = false;

  constructor(private router: Router, private ServTknService: ServTknService) { }

  ngOnInit(): void {
    if (this.ServTknService.getToken()){
      this.logged = true;
    }
  }
  onLogOut():void {
    this.ServTknService.logOut();
    window.location.reload();
  }
  goHome(){
    this.router.navigate(['allproducts'])
  }
  id(){
    this.router.navigate(['productinfo']);
  }
  offers(){
    this.router.navigate(['offers']);
  }
}
