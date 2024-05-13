import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  name = '';
  //message: string = 'Some Welcome Message';
  welcomeMessageFromService : string | undefined;
  errorMessage: string | undefined;

  //ActivatedRoute 
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService

  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => {
        this.handleSuccessfulResponse(response);
      },
      error => {
        this.handleErrorResponse(error);
      }
    );
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => {
        this.handleSuccessfulResponse(response);
      },
      error => {
        this.handleErrorResponse(error);
      }
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message; //Assigning the entire response object
    this.errorMessage = undefined; //Clear any previous error message
  }

  handleErrorResponse(error :any){
    this.errorMessage = error.message; 
    this.welcomeMessageFromService = undefined; //Clear any previous welcome message 
  }

}

/*
Remember: 
 You have indeed defined a class HelloWorldBean  in welcome-data.service.ts file to represent the structure of the response 
 from your backend service. In that case, we need to ensure that the
  welcomeMessageFromService property is of type HelloWorldBean in your 
  component.
  Now TypeScript will recognize welcomeMessageFromService as an object with a message property.
*/

/*Issue In Error Handling: Partally Got Success
Partially got success to render and display error message on front-end page.
Self-tried code. 
It not rendering the error message , which I wrote in backend code in Spring Boot, Where I throw the Runtime exception.
Try later. 
*/