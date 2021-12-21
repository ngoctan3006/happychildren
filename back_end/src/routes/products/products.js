import connection from '../../database'
import express from 'express'
import dotenv from 'dotenv'

const products = express.Router()

dotenv.config()
const DB_NAME = process.env.DB_NAME

products.get('/', (req, res) => {
    const sort = req.query.sort
    if(sort) {
        connection.query(`select * from ${DB_NAME}.products where not deleted order by point ${sort}`, (err, result) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(result)
            }
        })
    } else {
        connection.query(`select * from ${DB_NAME}.products where not deleted`, (err, result) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(result)
            }
        })
    }
})

products.get('/trash', (req, res) => {
    connection.query(`select * from ${DB_NAME}.products where deleted`, (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(result)
        }
    })
})

products.get('/:id', (req, res) => {
    connection.query(`select * from ${DB_NAME}.products where productID = ?`, [req.params.id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(result)
        }
    })
})

products.post('/create', (req, res) => {
    const data = req.body
    connection.query(`insert into ${DB_NAME}.products (name, point, detail, category) values (?, ?, ?, ?)`, [data.name, data.point, data.detail, data.category], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(201).send({
            message: 'create success'
        })
    })
})

products.patch('/edit/:id', (req, res) => {
    const data = req.body
    connection.query(`update ${DB_NAME}.products set name = ?, point = ?, detail = ?, category = ? where productID = ?`, [data.name, data.point, data.detail, data.category, req.params.id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'update success'
        })
    })
})

products.patch('/delete/:id', (req, res) => {
    connection.query(`update ${DB_NAME}.products set deleted = true where productID = ?`, [req.params.id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'soft delete success'
        })
    })
})

products.patch('/restore/:id', (req, res) => {
    connection.query(`update ${DB_NAME}.products set deleted = false where productID = ?`, [req.params.id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'restore success'
        })
    })
})

products.post('/hdelete/:id', (req, res) => {
    connection.query(`delete from ${DB_NAME}.products where productID = ?`, [req.params.id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'hard delete success'
        })
    })
})

export default products
