import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServicesService } from "../login-services.service";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class loginGuardian implements CanActivate{

  constructor(private loginService:LoginServicesService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.loginService.estaLogueado()){
      return true;
    }else {
      this.router.navigate(['/']);
      return false;
    }



  }

}
