import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  //You can inject this service, in which component you wanted 
  authenticate(username: string, password: string) {
    // console.log('before' + this.isUserLoggedIn());
    if (username === "in28minutes" && password === "dummy") {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() : void{
    sessionStorage.removeItem('authenticatedUser')
  }
}
