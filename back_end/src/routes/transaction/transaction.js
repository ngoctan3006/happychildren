import connection from '../../database/mysql.js'
import express from 'express'

const transaction = express.Router()

transaction.get('/', (req, res) => {
    connection.query('select * from happychildren.transaction order by createdAt', (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({ result })
    })
})

transaction.post('/create', (req, res) => {
    connection.query()
})

export default transaction
