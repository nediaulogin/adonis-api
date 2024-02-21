import item from "./item";

export default interface StockContract {
    findAll(): Promise<any[]>;
    addItem(quantidade: number, name: string): Promise<any>;
    removeItem(quantidade: number, name: string): Promise<any>;
    create(item: item): Promise<any>;
}