import { Component, OnInit } from '@angular/core';
//import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  
  constructor(
    //inject hardcodedAuthenticationService
   // public hardcodedAuthenticationService:HardcodedAuthenticationService

    //inject basicAuthenticationService i.e dynamic userid and password 
    public   basicAuthenticationService: BasicAuthenticationService
  
  ){}
  
  ngOnInit(): void {
    //this.hardcodedAuthenticationService.logout();  //call it 
    this.basicAuthenticationService.logout()
  }

}
