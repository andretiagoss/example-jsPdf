import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

declare var jsPDF: any;

@Injectable()
export class PedidoService{
    
    //REF: https://parall.ax/products/jspdf
    //     https://codepen.io/someatoms/pen/adojWy

    gerarPDF(listaPedidos: Pedido[]){
        const doc = new jsPDF();
        const colunasGridItens = ["Codigo", "Nome", "Qtde", "Preço", "Total" ];
        var linhasGridItens = [];
        let qtdePagina : number = 0;

        listaPedidos.forEach(pedido => {
            
            if (qtdePagina != 0) {
                doc.addPage();
            };

            doc.setFontSize(12);
            doc.text('Listagem do pedido ' + pedido.id,10,10);
            doc.line(10, 12, 195, 12);

            doc.setFontSize(10);
            doc.text('Pedido: ' + pedido.id,15,20);
            doc.text('Data da Compra: ' + pedido.dataCompra,100,20);
            doc.text('Tipo de Pagamento: ' + pedido.tipoPagamento,15,26);
            doc.text('CPF: ' + pedido.cpfCliente,15,32);
            doc.text('Nome: ' + pedido.nomeCliente,100,32);

            linhasGridItens = [];
            pedido.listaItens.forEach(item => {
                var temp = [item.codigo, item.nomeProduto, item.quantidade, item.preco, item.total];
                linhasGridItens.push(temp);
            });

            doc.text('Itens do Pedido',15,40)
            doc.autoTable(colunasGridItens, linhasGridItens, {margin: {top: 43}});

            doc.text('Assinatura:', 15,250);
            doc.line(35, 250, 195, 250);
            
            doc.text('Data da Entrega:', 15,260);
            doc.line(43, 260, 100, 260);

            qtdePagina++;

            doc.text(170,285, 'Pagina: ' + qtdePagina);
        });

        doc.save('jsPDF.pdf');        
    }
}