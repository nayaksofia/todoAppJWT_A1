import { Component, OnInit } from '@angular/core';
//import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{ 

  //isUserLoggedIn:boolean = false;

  constructor(
     //inject basicAuthenticationService For dynamic username and password
     public basicAuthenticationService: BasicAuthenticationService
     
    //public  hardcodedAuthenticationService: HardcodedAuthenticationService
    

  ){}

  ngOnInit(){
     //this.isUserLoggedIn=this.hardcodedAuthenticationService.isUserLoggedIn();
    
     // this.basicAuthenticationService.isUserLoggedIn()
    
    }

}
