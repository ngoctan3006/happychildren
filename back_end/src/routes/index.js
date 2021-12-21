import userRoutes from './users'
import newsRoutes from './news'
import transactionRoutes from './transaction'
import productsRoutes from './products'
// import centerRoutes  from './center'
// import exchangeRoutes  from './exchange'

export default (app) => {
    app.use('/api/v1/users', userRoutes)
    app.use('/api/v1/news', newsRoutes)
    app.use('/api/v1/transaction', transactionRoutes)
    app.use('/api/v1/products', productsRoutes)

    app.use('/', (req, res) => {
        res.send('<h1>Hello from homepage</h1>')
    })
}
