import CasoDeUso from "../../../shared/CasoDeUso";
import StockRepository from "../../repositories/stock-repository";


export default class findAllUseCase implements CasoDeUso<any, any[]> {

    constructor(private readonly repositorio: StockRepository) { }

    async executar(): Promise<any[]> {


        const list = await this.repositorio.findAll();


        return list;
    }

}