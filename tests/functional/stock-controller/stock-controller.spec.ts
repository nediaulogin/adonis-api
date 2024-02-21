import { test } from '@japa/runner'
import Stock from 'App/Models/Stock'

const stockData = {
    name: 'teste',
    descricao: 'teste',
    preco_compra: 10,
    preco_venda: 10,
    quantidade: 10,
}
const stockUpdate = {
    name: 'update',
    descricao: 'teste',
    preco_compra: 10,
    preco_venda: 10,
    quantidade: 10,
}


test.group('Stock Controller', async () => {
    test('display index stock ', async ({ client }) => {
        await Stock.query().delete()
        const response = await client.get('/api/stock/list')

        response.assertStatus(200)
        console.log(response.body())

    })
    test('display store stock', async ({ client }) => {

        const response = await client.post('/api/stock/store')
            .json({
                ...stockData,
            })

        response.assertStatus(200)
        response.assertBodyContains({
            name: 'teste',
            descricao: 'teste',
            preco_compra: 10,
            preco_venda: 10, quantidade: 10,
        })
        const id = response.body().id
        const del = await Stock.find(id)
        await del?.delete()

    }).skip()
    test('display add stock', async ({ client }) => {
        const stock = await Stock.create(stockUpdate)
        const response = await client.put('/api/stock/add')
            .json({
                ...stockData,
                quantidade: 5,
            })
        console.log(response.body())

        response.assertStatus(200)
        response.assertBodyContains({
            quantidade: 5,
        })
        // const all = await Stock.query()
        // console.log(all)
        await Stock.query().delete()

    })
    test('display update stock', async ({ client }) => {
        const stock = await Stock.create(stockData)
        const response = await client.put('/api/stock/' + stock.id)
            .json({
                ...stockData,
                quantidade: 5,
            })
        console.log(response.body())

        response.assertStatus(200)
        // response.assertBodyContains({
        //     quantidade: 5,
        // })

        console.log(Stock.all())
        await Stock.query().delete()

    }).skip()

})