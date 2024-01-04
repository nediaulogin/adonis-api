import { test } from '@japa/runner'
import Stock from 'App/Models/Stock'

const stockData = {
    name: 'teste',
    descricao: 'teste',
    preco_compra: 10,
    preco_venda: 10,
    quantidade: 10,
}


test.group('Stock Controller', async () => {
    test('display index stock ', async ({ client }) => {

        const response = await client.get('/api/stock/list')
        console.log(response.body())

        response.assertStatus(200)

    })
    test('display store stock', async ({ client }) => {

        const response = await client.post('/api/stock/store')
            .json({
                ...stockData,
            })

        console.log(response.body())

        response.assertStatus(200)
        response.assertBodyContains({ name: 'teste', descricao: 'teste', preco_compra: 10, preco_venda: 10, quantidade: 10, })
        const id = response.body().id
        const del = await Stock.find(id)
        await del?.delete()



    })
    // test('display update procedure', async ({ client }) => {
    // 	const { token } = await loginAndGetToken(client)
    // 	await deleteMany()
    // 	const procedure = await Procedure.create({ ...proceduresData, active: true })

    // 	const updatedData = {
    // 		...proceduresData,
    // 		name: 'Nova Unidade',
    // 	}
    // 	const response = await client
    // 		.put(`procedure/${procedure._id}`)
    // 		.json({ ...updatedData })
    // 		.headers({ Authorization: `Bearer ${token.token}` })
    // 	// console.log(response.body())
    // 	response.assertStatus(204 | 200)
    // 	const updatedProcedure: any = await Procedure.findById(procedure._id)

    // 	assert.equal(updatedProcedure?.name, updatedData.name)

    // 	const { deletedCount } = await deleteMany()
    // 	expect(deletedCount).to.greaterThan(0)
    // }).skip()

})