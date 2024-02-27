import item from "App/Core/interfaces/stock/item";
import StockContract from "App/Core/interfaces/stock/stock.interface";
import Stock from "App/Models/Stock";

export default class StockRepository implements StockContract {
	constructor() { }
	async create(item: item): Promise<any> {
		const novoItem = await Stock.create(item);
		if (!novoItem) {
			throw new Error('Não foi possível criar o item');
		}
		return novoItem;
	}
	async findAll(): Promise<any[]> {
		const list = await Stock.all();
		return list;
	}
	async addItem(quantidade, id): Promise<any> {
		const item = await Stock.find(id);

		if (!item) {
			throw new Error('Item não encontrado');
		}
		console.log(item.quantidade)
		// Certifique-se de que 'quantidade' é um número válido
		const quantidadeValida = parseInt(quantidade);
		if (isNaN(quantidadeValida)) {
			throw new Error('Quantidade inválida');
		}

		const quant = item.quantidade + quantidade;


		if (!isNaN(quant)) {
			return await Stock.query().where('id', id).update({
				quantidade: quant
			});
		}
	}
	removeItem(quantidade): Promise<any> {
		throw new Error("Method not implemented.");
	}
}