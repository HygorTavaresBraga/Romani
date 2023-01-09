import { ReservasService } from './../../services/reservas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {

  reserves: any;

  constructor( private reserveService: ReservasService ){ }

  ngOnInit(): void {

    this.reserveService.getReserves().subscribe(
      (result:any)=>{
        // console.log(result);
        this.reserves = result.data;
      }
    )



  }

  editarReserva(id:any){

  }

  excluirReserva(reserve:any){

    this.reserveService.deleteReserve(reserve.id).subscribe(data=>{
      this.reserves = this.reserves.filter((u:any) => u !== reserve);
    })

  }

}
