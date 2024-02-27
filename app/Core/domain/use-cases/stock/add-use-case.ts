import StockContract from "App/Core/interfaces/stock/stock.interface";
import CasoDeUso from "../../../shared/CasoDeUso";

type addType = {
    quantidade: number,
    id: any

}

export default class addUseCase implements CasoDeUso<addType, any> {

    constructor(private readonly repositorio: StockContract) { }

    async executar({ quantidade, id }: addType): Promise<any> {

        return await this.repositorio.addItem(quantidade, id);
    }

}