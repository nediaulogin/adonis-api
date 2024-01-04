import item from "App/Core/interfaces/stock/item";
import StockContract from "App/Core/interfaces/stock/stock.interface";
import Stock from "App/Models/Stock";

export default class StockRepository implements StockContract {
	constructor() { }
	async create(item: item): Promise<any> {
		const novoItem = await Stock.create(item);
		return novoItem;
	}
	async findAll(): Promise<any[]> {
		const list = await Stock.all();


		return list;
	}
	addItem(quantidade): Promise<any> {
		throw new Error("Method not implemented.");
	}
	removeItem(quantidade): Promise<any> {
		throw new Error("Method not implemented.");
	}
}