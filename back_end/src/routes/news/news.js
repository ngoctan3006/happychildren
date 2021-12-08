import connection from '../../database/mysql.js'
import express from 'express'

const news = express.Router()

news.get('/', (req, res) => {
    const category = req.query.category
    if(category) {
        connection.query('select * from happychildren.post_news where deletedAt is null and category = ? order by updatedAt desc', [category], (err, result) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(result)
            }
        })
    } else {
        connection.query('select * from happychildren.post_news where deletedAt is null order by updatedAt desc', (err, result) => {
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

news.get('/trash', (req, res) => {
    connection.query('select * from happychildren.post_news where deletedAt is not null order by updatedAt desc', (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(result)
        }
    })
})

news.get('/:id', (req, res) => {
    const id = req.params.id
    connection.query('select * from happychildren.post_news where id = ?', [id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(result)
        }
    })
})

news.post('/create', (req, res) => {
    const data = req.body
    connection.query('insert into happychildren.post_news (title, content, category) values (?, ?, ?)', [data.title, data.content, data.category], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(201).send({
            message: 'create success'
        })
    })
})

news.patch('/edit/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    connection.query('update happychildren.post_news set title = ?, content = ?, category = ? where id = ?', [data.title, data.content, data.category, id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'update success'
        })
    })
})

news.patch('/delete/:id', (req, res) => {
    const id = req.params.id
    connection.query('update happychildren.post_news set deletedAt = current_timestamp() where id = ?', [id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'soft delete success'
        })
    })
})

news.patch('/restore/:id', (req, res) => {
    const id = req.params.id
    connection.query('update happychildren.post_news set deletedAt = null where id = ?', [id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'restore success'
        })
    })
})

news.post('/hdelete/:id', (req, res) => {
    const id = req.params.id
    connection.query('delete from happychildren.post_news where id = ?', [id], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'hard delete success'
        })
    })
})

export default news
