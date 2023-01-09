import { UsuarioService } from './usuario.service';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private usuarioService: UsuarioService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

      const routeUrl: string = state.url;
      return this.isLogin(routeUrl);


  }

  isLogin(routeUrl: string){
    if(this.usuarioService.isLoggedIn()){
      return true;
    }

    this.usuarioService.redirectUrl = routeUrl;
    this.router.navigate(['/']), {queryParams: {returnUrl : routeUrl}}
  }

}

