import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import userRoutes from './routes/users/users.js'
import newsRoutes from './routes/news/news.js'
import transactionRoutes from './routes/transaction/transaction.js'
import productsRoutes from './routes/products/products.js'
import express from 'express'

const PORT = process.env.PORT || 4552

const app = express()

app.use(bodyParser.json())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/news', newsRoutes)
app.use('/api/v1/transaction', transactionRoutes)
app.use('/api/v1/products', productsRoutes)

app.use('/', (req, res) => {
    res.send('<h1>Hello from homepage</h1>')
})

app.listen(PORT, () => {
    console.log(`HappyChildren App is running on PORT ${PORT}`)
})
