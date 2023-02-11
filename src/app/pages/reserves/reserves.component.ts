import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { ReservasService } from './../../services/reservas.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {

  reserves: any;

  constructor( private reserveService: ReservasService, private usuarioService: UsuarioService, private router: Router ){ }

  ngOnInit(): void {

    this.reserveService.getReserves().subscribe(
      (result:any)=>{
        this.reserves = result.data;
      }

    );

    if(this.usuarioService.getAcesso() != 'Adm'){
      this.router.navigate(['/Acesso']);
    }

  }

  editarReserva(reserva:any){

    localStorage.setItem('idReserva', reserva.idReserva);
    localStorage.setItem('idUsuario', reserva.idUsuario);
    localStorage.setItem('unidade', reserva.unidade);
    localStorage.setItem('qtdPessoas', reserva.qtdPessoas);
    localStorage.setItem('data', reserva.data);
    localStorage.setItem('hora', reserva.hora);
    localStorage.setItem('status', reserva.status);

  }

  clearEditStorage(){
    localStorage.removeItem('idReserva');
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('unidade');
    localStorage.removeItem('qtdPessoas');
    localStorage.removeItem('data');
    localStorage.removeItem('hora');
    localStorage.removeItem('status');
  }

  excluirReserva(reserve:any){

    this.reserveService.deleteReserve(reserve.id).subscribe(data=>{
      this.reserves = this.reserves.filter((u:any) => u !== reserve);
    })

  }

}
