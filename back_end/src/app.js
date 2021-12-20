import bodyParser from 'body-parser'
import express from 'express'
import {
    userRoutes,
    newsRoutes,
    transactionRoutes,
    productsRoutes
} from './routes'

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
