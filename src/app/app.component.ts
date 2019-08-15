import { Component, OnInit } from '@angular/core';
import { Pedido } from './models/pedido';
import { PedidoService } from './services/pedido.service';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  pedido: Pedido[] = [];

  constructor(private pedidoService: PedidoService){}

  ngOnInit() {
    this.pedido = [
      {
        id : 1, 
        dataCompra : '15/08/2019', 
        tipoPagamento : 'Cartão de Crédito', 
        cpfCliente : '31023814803', 
        nomeCliente : 'André Silva', 
        listaItens : [
          {
            codigo:'804.01.123.12.40',
            nomeProduto: 'Sapato Ferracini',
            quantidade: 1,
            preco: 239.99,
            total: 239.99
          },
          {
            codigo:'804.01.123.12.40',
            nomeProduto: 'Sapatenis West Coast',
            quantidade: 1,
            preco: 199.99,
            total: 199.99
          }
        ] 
      },
      {
        id : 2, 
        dataCompra : '15/08/2019', 
        tipoPagamento : 'Cartão de Crédito', 
        cpfCliente : '31023814802', 
        nomeCliente : 'Aline Silva', 
        listaItens : [
          {
            codigo:'609.01.123.12.40',
            nomeProduto: 'Sandalia Via Uno',
            quantidade: 1,
            preco: 239.99,
            total: 239.99
          },
          {
            codigo:'609.01.123.12.40',
            nomeProduto: 'Sapato Dacota',
            quantidade: 1,
            preco: 199.99,
            total: 199.99
          }
        ] 
      }
    ];
  }

  gerarPDF(){
    console.log('Gerando PDF...');
    this.pedidoService.gerarPDF(this.pedido);
  };
}
