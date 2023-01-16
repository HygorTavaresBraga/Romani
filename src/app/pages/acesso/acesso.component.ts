import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  nivelAcesso!: string;
  acesso:FormGroup;

constructor(

            private formBuilder: FormBuilder,
            private router: Router,
            private usuarioService: UsuarioService

           ){

            this.acesso = this.formBuilder.group({

              email: ['', [Validators.required, Validators.email]],
              senha: ['', [Validators.required, Validators.minLength(8)]],

            })

           }

ngOnInit(): void {

}



acessar(acesso:any){

  // console.log(acesso.get('email').value);
  // console.log(acesso.get('senha').value);

  this.usuarioService.login(acesso.value.email , acesso.value.senha)
  .subscribe(

    data => {

      // console.log(data);

      if(data.message == 'Usuario encontrado'){

        if(this.usuarioService.getAcesso() == 'Adm'){

          this.nivelAcesso = 'Admin';
          this.router.navigate(['/']);

        }else if(this.usuarioService.getAcesso() == 'Cliente'){

          this.nivelAcesso = 'Cliente';
          this.router.navigate(['/']);

        }

      }else if (data.message == 'Campo(s) vazio(s)'){

        alert("Por favor, preencha todos os campos.");

      }else{

        alert("Usuário não encontrado");

      }

    });

  }

}
