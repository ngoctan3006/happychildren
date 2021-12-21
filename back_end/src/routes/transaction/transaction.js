import connection from '../../database/mysql.js'
import express from 'express'
import dotenv from 'dotenv'

const transaction = express.Router()

dotenv.config()
const DB_NAME = process.env.DB_NAME

transaction.get('/', (req, res) => {
    connection.query(`select * from ${DB_NAME}.transaction order by createdAt`, (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send(result)
    })
})

transaction.post('/create', (req, res) => {
    connection.query()
})

export default transaction
