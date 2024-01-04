import { DateTime } from "luxon";

export default interface item {
    name: string;
    descricao: string;
    preco_compra: number;
    preco_venda: number;
    quantidade: number;
    createdAt?: DateTime;
    updatedAt?: DateTime;
}