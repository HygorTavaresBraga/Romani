import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //Data
  dia!: string;
  mes!: string;
  ano!: string;
  data!: string;

  //Hora
  hora!:Number;

  //Mensagem
  mensagem!:string;

  //--------------------------

  adm:boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(): void {

    if(this.usuarioService.getToken() != null){

      if(this.usuarioService.getAcesso() == 'Adm'){
        window.history.back();
        alert("Apenas clientes podem acessar o perfil");
      }

    }else{

      this.router.navigate(['/']);

    }


    //---------------------------

    //Data

    this.dia = String(new Date().getDate());
    this.mes = String(new Date().getMonth());
    this.ano = String(new Date().getFullYear());

    this.data = this.dia + '/' + this.mes+1 + '/' + this.ano;

    //Horario

    this.hora = Number(new Date().getHours());

    if(this.hora >= 0o6 && this.hora <= 12){
      this.mensagem = 'Bom dia!';
    }else if(this.hora > 12 && this.hora <= 18){
      this.mensagem = 'Boa tarde!';
    }else{
      this.mensagem = 'Boa noite!';
    }

    //----------------



  }

}
