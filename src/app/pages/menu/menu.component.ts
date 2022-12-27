import { Component, OnInit } from '@angular/core';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

constructor(private service: CardapioService){ }

entradasData:any;
principaisData:any;
sobremesasData:any;

ngOnInit(): void {
  this.entradasData = this.service.entradasCardapio;
  this.principaisData = this.service.principaisCardapio;
  this.sobremesasData = this.service.sobremesasCardapio;

}

}
