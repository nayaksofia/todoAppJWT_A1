import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  //Router
  //Dependency Injection --built in feature 
  constructor(
    private router: Router,
    //private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService

  ) {

  }

  ngOnInit(): void {

  }


  handleJWTAuthLogin() {
    //Check if username and password are provided 
    if (this.username && this.password) {
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);

            //Redirect To The Welcomepage 
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        );
    } else {
      this.invalidLogin = true; // Set invalidLogin to true if username or password is empty
    }


  }


}
