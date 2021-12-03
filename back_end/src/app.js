// import router from './routes/router.js'
// import register from './auth/register.js'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import userRoutes from './routes/users/users.js'
import newsRoutes from './routes/news/news.js'
import express from 'express'

const PORT = process.env.PORT || 4552

const app = express()

app.use(bodyParser.json())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/news', newsRoutes)

app.use('/', (req, res) => {
    res.send('<h1>Hello from homepage</h1>')
})

// app.use('/api/v1/register', register)
// app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`HappyChildren App is running on PORT ${PORT}`)
})
