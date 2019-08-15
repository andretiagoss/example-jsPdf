import { PedidoITens } from './pedidoItens';

export interface Pedido{
    id: number;
    dataCompra: string;
    tipoPagamento: string;
    cpfCliente: string;
    nomeCliente: string;
    listaItens: PedidoITens[];
}