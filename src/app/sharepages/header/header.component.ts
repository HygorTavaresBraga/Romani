import { Component } from '@angular/core';

import { UsuarioService } from 'src/app/usuario/usuario.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

acesso!: boolean;

loginBtn:boolean;
logoutBtn:boolean;


constructor(private usuarioService: UsuarioService, private router: Router){

  usuarioService.getLoggedInName.subscribe(name => this.changeName(name));

  if(this.usuarioService.isLoggedIn()){

    // console.log('logado');
    this.loginBtn = false;
    this.logoutBtn = true;

    if(this.usuarioService.getAcesso() == 'Adm'){

      this.acesso = true;

    }else{

      this.acesso = false;

    }


  }else{

    this.loginBtn = true;
    this.logoutBtn = false;

  }






}



private changeName(name: boolean): void{
  this.logoutBtn = name;
  this.loginBtn = !name;
}

logout(){
  this.usuarioService.deleteToken();
  this.usuarioService.deleteAcesso();
  window.location.href = window.location.href;
}

}
