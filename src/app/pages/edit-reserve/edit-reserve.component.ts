import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-reserve',
  templateUrl: './edit-reserve.component.html',
  styleUrls: ['./edit-reserve.component.css']
})
export class EditReserveComponent implements OnInit {

  idReserva: any;
  idUsuario: any;
  unidade: any;
  qtdPessoas: any;
  data: any;
  hora: any;
  status: any;

  constructor(){}

  ngOnInit(): void {

    this.idReserva = localStorage.getItem('idReserva');
    this.idUsuario = localStorage.getItem('idUsuario');
    this.unidade = localStorage.getItem('unidade');
    this.qtdPessoas = localStorage.getItem('qtdPessoas');
    this.data = localStorage.getItem('data');
    this.hora = localStorage.getItem('hora');
    this.status = localStorage.getItem('status');

  }



}
