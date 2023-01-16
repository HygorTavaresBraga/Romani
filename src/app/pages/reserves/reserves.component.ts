import { Router } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { ReservasService } from './../../services/reservas.service';
import { Component, OnInit } from '@angular/core';

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
        // console.log(result);
        this.reserves = result.data;
      }

    )

    if(this.usuarioService.getAcesso() != 'Adm'){
      this.router.navigate(['/Acesso']);
    }

  }

  editarReserva(id:any){

  }

  excluirReserva(reserve:any){

    this.reserveService.deleteReserve(reserve.id).subscribe(data=>{
      this.reserves = this.reserves.filter((u:any) => u !== reserve);
    })

  }

}
