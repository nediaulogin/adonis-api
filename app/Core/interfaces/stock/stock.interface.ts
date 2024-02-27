import item from "./item";

export default interface StockContract {
    findAll(): Promise<any[]>;
    addItem(quantidade: number, id: number): Promise<any>;
    removeItem(quantidade: number, id: any): Promise<any>;
    create(item: item): Promise<any>;
}