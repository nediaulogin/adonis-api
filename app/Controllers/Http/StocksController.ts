import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StocksController {
  public async index({ }: HttpContextContract) {
    return 'test indexno'
  }

  public async store({ request }: HttpContextContract) {
    return request.all()
  }

  public async show({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
