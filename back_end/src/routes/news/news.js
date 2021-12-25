import db from '../../database'
import express from 'express'

const news = express.Router()

news.get('/', (req, res) => {
    const category = req.query.category
    if(category) {
        db.all(`select * from post_news where deletedAt is null and category = ? order by updatedAt desc`, [category], (err, results) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(results)
            }
        })
    } else {
        db.all(`select * from post_news where deletedAt is null order by updatedAt desc`, (err, results) => {
            if(err) {
                res.status(404).send({
                    message: err
                })
            } else {
                res.status(200).send(results)
            }
        })
    }
})

news.get('/trash', (req, res) => {
    db.all(`select * from post_news where deletedAt is not null order by updatedAt desc`, (err, results) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(results)
        }
    })
})

news.get('/:id', (req, res) => {
    const id = req.params.id
    db.all(`select * from post_news where id = ?`, [id], (err, results) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(results)
        }
    })
})

news.post('/create', (req, res) => {
    const data = req.body
    db.all(`insert into post_news (title, content, category) values (?, ?, ?)`, [data.title, data.content, data.category], (err, results) => {
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
    db.all(`update post_news set title = ?, content = ?, category = ? where id = ?`, [data.title, data.content, data.category, id], (err, results) => {
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
    db.all(`update post_news set deletedAt = (datetime("now", "localtime")) where id = ?`, [id], (err, results) => {
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
    db.all(`update post_news set deletedAt = null where id = ?`, [id], (err, results) => {
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
    db.all(`delete from post_news where id = ?`, [id], (err, results) => {
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
