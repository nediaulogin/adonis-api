import item from "App/Core/interfaces/stock/item";
import StockContract from "App/Core/interfaces/stock/stock.interface";
import Stock from "App/Models/Stock";

export default class StockRepository implements StockContract {
	constructor() { }
	async findAll(): Promise<any[]> {
		const list = await Stock.all();


		return list;
	}
	addItem(item: item): Promise<any> {
		throw new Error("Method not implemented.");
	}
	removeItem(): Promise<any> {
		throw new Error("Method not implemented.");
	}
}