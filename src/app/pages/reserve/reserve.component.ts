import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  loginBtn:boolean;
  logoutBtn:boolean;
  auth:any;

  constructor(private usuarioService: UsuarioService, private router: Router){

    usuarioService.getLoggedInName.subscribe(name => this.changeName(name));

    if(this.usuarioService.isLoggedIn()){

      console.log('logado');
      this.loginBtn = false;
      this.logoutBtn = true;

    }else{

      this.loginBtn = true;
      this.logoutBtn = false;

    }

  }

  private changeName(name: boolean): void{
    this.logoutBtn = name;
    this.loginBtn = !name;
  }

  //Deslogar.
  logout(){
    this.usuarioService.deleteToken();
    window.location.href = window.location.href;
  }


  ngOnInit(): void {

    //Só permitir o Acesso se estiver logado.
    // this.auth = localStorage.getItem('token');

    // if(!this.auth){

    //   this.router.navigate(['/Acesso']);

    // }

  }

}
