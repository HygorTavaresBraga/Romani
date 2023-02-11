import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  reserva:any;

  token:any = this.usuarioService.getToken();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router){

    if(this.usuarioService.getToken() != null && this.usuarioService.getToken() != ''){

      this.reserva = this.formBuilder.group({

        token: [this.token, [Validators.required]],
        unidade: ['', [Validators.required]],
        qtdPessoas: ['', [Validators.required]],
        data: ['', [Validators.required]],
        hora: ['', [Validators.required]]

      })

    }

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

  ngOnInit(): void {

    //Só permitir o Acesso se estiver logado.
    // this.auth = localStorage.getItem('token');

    // if(!this.auth){

    //   this.router.navigate(['/Acesso']);

    // }

  }

  private changeName(name: boolean): void{
    this.logoutBtn = name;
    this.loginBtn = !name;
  }

  reservar(){

    console.log(this.reserva.get('token').value);
    console.log(this.reserva.get('unidade').value);
    console.log(this.reserva.get('qtdPessoas').value);
    console.log(this.reserva.get('data').value);
    console.log(this.reserva.get('hora').value);

    if(

        this.reserva.get('token').value != '' &&
        this.reserva.get('unidade').value != '' &&
        this.reserva.get('qtdPessoas').value != '' &&
        this.reserva.get('data').value != '' &&
        this.reserva.get('hora').value != ''

      ){

        if(this.reserva.get('unidade').value == 'Barra da Tijuca'){

          alert('Unidade Barra da Tijuca não disponível para reservas online.');

        }else if(this.reserva.get('unidade').value == 'Leblon'){

          alert('Unidade Leblon não disponível para reservas online.');

        }else{

          this.usuarioService.createReserve(this.reserva.value).subscribe();
          // this.router.navigate(['Perfil']);

        }

    }



    };

  //Deslogar.
  logout(){
    this.usuarioService.deleteToken();
    window.location.href = window.location.href;
  }




}
