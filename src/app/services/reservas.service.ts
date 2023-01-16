import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reserves } from '../models/reserves';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor( private http:HttpClient, private usuarioService : UsuarioService ) { }

  url: string = 'http://localhost/romani/';
  idCliente = this.usuarioService.getToken();

  getReserves() {
    return this.http.get<Reserves[]>(this.url+'reservas.php');
  }

  getReservesCliente() {
    return this.http.post<Reserves[]>(this.url+'reservasCliente.php', this.idCliente);
  }

  deleteReserve(id:any) {
    return this.http.delete(this.url+'delete.php?id='+id);
  }
}
