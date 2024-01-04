import StockContract from "App/Core/interfaces/stock/stock.interface";
import CasoDeUso from "../../../shared/CasoDeUso";


export default class findAllUseCase implements CasoDeUso<any, any[]> {

    constructor(private readonly manager: StockContract) { }

    async executar(): Promise<any[]> {


        const list = await this.manager.findAll();


        return list;
    }

}