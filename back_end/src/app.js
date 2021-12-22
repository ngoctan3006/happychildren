import express from 'express'
import cors from 'cors'
import route from './routes'

const PORT = process.env.PORT || 4552

const app = express()

app.use(express.json())
app.use(cors())

route(app)

app.listen(PORT, () => {
    console.log(`HappyChildren App is running on PORT ${PORT}`)
})
