import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StockRepository from 'App/Core/domain/repositories/stock-repository';
import addUseCase from 'App/Core/domain/use-cases/stock/add-use-case';
import createUseCase from 'App/Core/domain/use-cases/stock/create-use-case';
import findAllUseCase from 'App/Core/domain/use-cases/stock/find-all-use-case';

export default class StocksController {
  private readonly repositorio: StockRepository;
  private readonly findAll: findAllUseCase;
  private readonly create: createUseCase
  private readonly addItem: addUseCase

  constructor() {
    this.repositorio = new StockRepository();
    this.findAll = new findAllUseCase(this.repositorio);
    this.create = new createUseCase(this.repositorio);
    this.addItem = new addUseCase(this.repositorio);
  }

  public async index({ response }: HttpContextContract) {
    const list = await this.findAll.executar();
    return response.json(list);
  }
  public async store({ request }: HttpContextContract) {
    const item = request.body();
    return await this.create.executar(item);
  }
  public async add({ request }: HttpContextContract) {
    const ctx = request.params();
    console.log(ctx)
    return await this.addItem.executar(ctx);
  }

  public async show({ }: HttpContextContract) { }

  public async update({ request }: HttpContextContract) {
    const item = request.body();
    return request.all();
  }

  public async destroy({ }: HttpContextContract) { }
}
