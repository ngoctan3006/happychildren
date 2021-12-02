import router from './router/router.js'
import express from 'express'

const PORT = process.env.PORT || 4552

const app = express()

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`HappyChildren app listening at http://localhost:${PORT}`)
})
