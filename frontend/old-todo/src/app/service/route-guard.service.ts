import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
//import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  //Inject the hardcodedAuthentication service to know the login authentication 
  constructor(
    //public hardcodedAuthenticationService: HardcodedAuthenticationService,
    //Inject basicAuthenticationService to know dynamic login
    public basicAuthenticationService : BasicAuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login'])

    return false;
  }
}
