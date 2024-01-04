import item from "./item";

export default interface StockContract {
    findAll(): Promise<any[] | null>;
    addItem(item: item): Promise<any>;
    removeItem(): Promise<any>;
}