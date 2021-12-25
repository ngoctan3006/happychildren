import db from '../../database'
import express from 'express'

const transaction = express.Router()

transaction.get('/', (req, res) => {
    db.all(`select * from transaction order by createdAt`, (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send(result)
    })
})

transaction.post('/create', (req, res) => {
    db.all()
})

export default transaction
