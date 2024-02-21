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
	addItem(quantidade, name): Promise<any> {
		const item: Partial<item> = Stock.findByOrFail('name', name);

		console.log('aiaiaiaiaiaiai');
		const quant = item.quantidade + quantidade;
		return Stock.query().where('name', name).update({

		})
	}
	removeItem(quantidade): Promise<any> {
		throw new Error("Method not implemented.");
	}
}