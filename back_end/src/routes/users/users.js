import express from 'express'
import connection from '../../database'
import authenToken from '../auth'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

const users = express.Router()

dotenv.config()
const DB_NAME = process.env.DB_NAME

users.get('/', authenToken, (req, res) => {
    connection.query(`select * from ${DB_NAME}.user_account`, (err, results) => {
        if (err) {
            res.status(404).send({
                message: err
            })
        } else {
            res.status(200).send(results)
        }
    })
})

users.post('/register', (req, res) => {
    const data = req.body
    bcrypt.hash(data.password, Number.parseInt(process.env.SALT_ROUND), (err, hash) => {
        connection.query(`insert into ${DB_NAME}.user_account (accountID, username, password, fullName, email) values (?, ?, ?, ?, ?)`, [uuidv4(), data.username, hash, data.fullName, data.email], (error, results) => {
            if (error) {
                if (error.code === 'ER_DUP_ENTRY') {
                    res.status(409).send({
                        message: 'username already in use'
                    })
                } else res.status(404).send(error)
            } else res.status(201).send({
                message: 'register success'
            })
        })
    })
})

users.post('/login', (req, res) => {
    const data = req.body
    connection.query(`select accountID, password from ${DB_NAME}.user_account where username = ?`, [data.username], (error, results) => {
        if (error) {
            res.status(404).send(error)
        } else if (!results[0]) {
            res.status(500).send({
                message: 'username or password is incorrect'
            })
        } else {
            bcrypt.compare(data.password, results[0].password, (err, result) => {
                if (result) {
                    const accessToken = jwt.sign({ username: data.username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '300s' })
                    res.status(200).send(accessToken)
                } else {
                    res.status(500).send({
                        message: 'username or password is incorrect'
                    })
                }
            })
        }
    })
})

users.patch('/edit/:username', (req, res) => {
    const data = req.body
    connection.query(`update ${DB_NAME}.user_account set fullName = ?, address = ?, phoneNumber = ?, email = ? where username = ?`, [data.fullName, data.address, data.phoneNumber, data.email, req.params.username], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else res.status(200).send({
            message: 'update information success'
        })
    })
})

users.patch('/password/:username', (req, res) => {
    const data = req.body
    connection.query(`update ${DB_NAME}.user_account set password = ? where username = ? and password = ?`, [data.old, data.new, req.params.username], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else res.status(200).send({
            message: 'change password success'
        })
    })
})

export default users
