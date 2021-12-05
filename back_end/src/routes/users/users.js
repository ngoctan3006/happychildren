import connection from '../../database/mysql.js'
import express from 'express'

const users = express.Router()

users.get('/', (req, res) => {
    connection.query('select * from happychildren.user_account', (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send({ result })
        }
    })
})

users.post('/register', (req, res) => {
    const data = req.body
    connection.query('insert into happychildren.user_account (username, password, fullName, email) values (?, ?, ?, ?)', [data.username, data.password, data.fullName, data.email], (err, result) => {
        if(err) {
            if(err.code === 'ER_DUP_ENTRY') {
                res.status(401).send({
                    message: 'username already in use'
                })
            } else res.status(404).send({ 
                message: err
            })
        } else res.status(201).send({
            message: 'register success'
        })
    })
})

users.post('/login', (req, res) => {
    const data = req.body
    connection.query('select accountID from happychildren.user_account where username = ? and password = ?', [data.username, data.password], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else if(!result[0]) {
            res.status(401).send({
                message: 'username or password is incorrect'
            })
        } else res.status(200).send({
            message: 'login success'
        })
    })
})

users.patch('/edit/:username', (req, res) => {
    const data = req.body
    connection.query('update happychildren.user_account set fullName = ?, address = ?, phoneNumber = ?, email = ? where username = ?', [data.fullName, data.address, data.phoneNumber, data.email, req.params.username], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'update information success'
        })
    })
})

users.patch('/changepassword/:username', (req, res) => {
    const data = req.body
    connection.query('update happychildren.user_account set password = ? where username = ?', [data.password, req.params.username], (err, result) => {
        if(err) {
            res.status(404).send({
                message: err
            })
        } else res.status(200).send({
            message: 'change password success'
        })
    })
})

export default users