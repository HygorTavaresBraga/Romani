import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit{

  cadastro:any;

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService : UsuarioService

  ){

    this.cadastro = this.formBuilder.group({

      nome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],

    })

  }


ngOnInit(): void {

}

cadastrar(){

  if(

      this.cadastro.get('nome').value != '' &&
      this.cadastro.get('cpf').value != '' &&
      this.cadastro.get('email').value != '' &&
      this.cadastro.get('senha').value != ''

    ){

    this.usuarioService.createClient(this.cadastro.value).subscribe();
    this.router.navigate(['Acesso']);

  }



  };


}
