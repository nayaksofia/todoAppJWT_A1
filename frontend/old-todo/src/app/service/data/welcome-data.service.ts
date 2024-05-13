import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';


//Create a class; to represent the structure if the response from backend service
export class HelloWorldBean {
  constructor(
    public message: string,
    public error: any
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient  //inject httpclient
  ) { }

  executeHelloWorldBeanService() {
    //then ,Invoke the helloworldbean service
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    // console.log("Execute Hello World Bean Service");
  }
   //http://localhost:8080/hello-world/path-variable/in28minutes

  executeHelloWorldServiceWithPathVariable(name : string) {


    return this.http.get<HelloWorldBean>
     (`${API_URL}/hello-world/path-variable/${name}`);
    
  }



}
