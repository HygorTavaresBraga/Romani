import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor() { }

  entradasCardapio =
  [
    {
      nome:"Pão artesanal de cuscuz de milho",
      descricao:"ricota cremosa, azeitonas",
      valor: 22,
    },
    {
      nome:"Tomate tonatto",
      descricao:"tomates orgânicos fatiados finíssimos, com molho tonatto, farofa de pão e bottarga",
      valor: 35,
    },
    {
      nome:"Salada dos agricultores",
      descricao:"folhas da cooperapas, queijo Mandala, tahine e croutons do nosso pão",
      valor: 36,
    },
    {
      nome:"Salada de pêssego",
      descricao:"mozarela de búfala, rúcula, hortelã e parmesão",
      valor: 42,
    },
  ]

  principaisCardapio =
  [
    {
      nome:"Capellini de cogumelos orgânicos",
      descricao:"mascarpone, limão siciliano e salsinha",
      valor: 96.00,
    },
    {
      nome:"Cogumelos assados no forno a lenha",
      descricao:"creme de castanhas, pão achatado (vegano)",
      valor: 68.00,
    },
    {
      nome:"Tagliatelle Alfredo",
      descricao:"fettuccine, queijo parmesão e manteiga",
      valor: 59.00,
    },
    {
      nome:"Nhoque de ricota artesanal",
      descricao:"com ragú de grão de bico",
      valor: 78.00,
    },
  ]

  sobremesasCardapio =
  [
    {
      nome:"Panna cotta de baunilha",
      descricao:"com calda de goiabada, perfume de grappa",
      valor: 42.00,
    },
    {
      nome:"Profiteroles de sorvete de baunilha",
      descricao:"com calda de chocolate",
      valor: 68.00,
    },
    {
      nome:"Sorvete de chocolate",
      descricao:"(vegano)",
      valor: 32.00,
    },
    {
      nome:"Pavlova com frutas frescas",
      descricao:"(para duas pessoas)",
      valor: 59.00,
    },
  ]

}
