import item from "App/Core/interfaces/stock/item";
import StockContract from "App/Core/interfaces/stock/stock.interface";
import CasoDeUso from "../../../shared/CasoDeUso";


export default class createUseCase implements CasoDeUso<item, any> {

    constructor(private readonly repositorio: StockContract) { }

    async executar(item): Promise<any[]> {

        return await this.repositorio.create(item);
    }

}