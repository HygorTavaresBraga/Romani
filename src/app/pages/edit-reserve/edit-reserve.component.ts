import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';

@Component({
  selector: 'app-edit-reserve',
  templateUrl: './edit-reserve.component.html',
  styleUrls: ['./edit-reserve.component.css']
})
export class EditReserveComponent implements OnInit {

  edicao:any;

  idReserva: any;
  idUsuario: any;
  unidade: any;
  qtdPessoas: any;
  data: any;
  dataFormatada: any;
  _dataFormatada: any;
  hora: any;
  horaFormatada: any;
  _horaFormatada: any;
  status: any;

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService : UsuarioService

  ){
    this.idReserva = localStorage.getItem('idReserva');

    this.edicao = this.formBuilder.group({

      idReserva: [this.idReserva, [Validators.required]],
      Unidade: ['', [Validators.required]],
      Pessoa: ['', [Validators.required]],
      Data: ['', [Validators.required]],
      Horario: ['', [Validators.required]],
      Status: ['', [Validators.required]],

    })

  }

  ngOnInit(): void {

    this.idUsuario = localStorage.getItem('idUsuario');
    this.unidade = localStorage.getItem('unidade');
    this.qtdPessoas = localStorage.getItem('qtdPessoas');
    this.data = localStorage.getItem('data');
    this.hora = localStorage.getItem('hora');
    this.status = localStorage.getItem('status');

    this.dataFormatada = this.data.split(['-']);
    this._dataFormatada = this.dataFormatada[2]+'/'+this.dataFormatada[1]+'/'+this.dataFormatada[0];

    this.horaFormatada = this.hora.split([':']);
    this._horaFormatada = this.horaFormatada[0]+':'+this.horaFormatada[1];

  }

  editar(){

    if(

      this.edicao.get('idReserva').value != 0 &&
      this.edicao.get('Unidade').value != '' &&
      this.edicao.get('Pessoa').value != '' &&
      this.edicao.get('Data').value != '' &&
      this.edicao.get('Horario').value != '' &&
      this.edicao.get('Status').value != ''

    ){

    this.usuarioService.editReserve(this.edicao.value).subscribe();
    this.router.navigate(['Reservas']);
  }

  }


}
