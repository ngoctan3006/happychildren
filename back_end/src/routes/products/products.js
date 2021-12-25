import db from '../../database'
import express from 'express'

const products = express.Router()

products.get('/', (req, res) => {
    const sort = req.query.sort
    if(sort) {
        db.all(`select * from products where not deleted order by point ${sort}`, (err, result) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(result)
            }
        })
    } else {
        db.all(`select * from products where not deleted`, (err, result) => {
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
    db.all(`select * from products where deleted`, (err, result) => {
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
    db.all(`select * from products where productID = ?`, [req.params.id], (err, result) => {
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
    db.all(`insert into products (name, point, detail, category) values (?, ?, ?, ?)`, [data.name, data.point, data.detail, data.category], (err, result) => {
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
    db.all(`update products set name = ?, point = ?, detail = ?, category = ? where productID = ?`, [data.name, data.point, data.detail, data.category, req.params.id], (err, result) => {
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
    db.all(`update products set deleted = 1 where productID = ?`, [req.params.id], (err, result) => {
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
    db.all(`update products set deleted = 0 where productID = ?`, [req.params.id], (err, result) => {
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
    db.all(`delete from products where productID = ?`, [req.params.id], (err, result) => {
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
