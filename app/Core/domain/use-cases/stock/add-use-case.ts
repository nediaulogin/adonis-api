import StockContract from "App/Core/interfaces/stock/stock.interface";
import CasoDeUso from "../../../shared/CasoDeUso";

type addType = {
    quantidade: number,
    name: string

}

export default class addUseCase implements CasoDeUso<addType, any> {

    constructor(private readonly repositorio: StockContract) { }

    async executar({ quantidade, name }: addType): Promise<any> {

        return await this.repositorio.addItem(quantidade, name);
    }

}