import item from "./item";

export default interface StockContract {
    findAll(): Promise<any[]>;
    addItem(quantidade: number): Promise<any>;
    removeItem(quantidade: number): Promise<any>;
    create(item: item): Promise<any>;
}