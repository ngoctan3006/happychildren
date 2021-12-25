import express from 'express'
import db from '../../database'
import authenToken from '../auth'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()

const users = express.Router()

users.get('/', authenToken, (req, res) => {
    db.all('select * from user_account', (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(results)
        }
    })
})

users.post('/register', (req, res) => {
    const data = req.body
    bcrypt.hash(data.password, Number.parseInt(process.env.SALT_ROUND), (err, hash) => {
        db.all(`insert into user_account (accountID, username, password, fullName, email) values (?, ?, ?, ?, ?)`, [uuidv4(), data.username, hash, data.fullName, data.email], (error, results) => {
            if (error) {
                if (error.code === 'SQLITE_CONSTRAINT') {
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
    db.all(`select accountID, password from user_account where username = ?`, [data.username], (error, results) => {
        if (error) {
            res.status(404).send(error)
        } else if (!results[0]) {
            res.status(500).send({
                message: 'username or password is incorrect'
            })
        } else {
            bcrypt.compare(data.password, results[0].password, (err, result) => {
                if (result) {
                    const accessToken = jwt.sign({ username: data.username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_TIME })
                    res.status(200).send({
                        token: accessToken
                    })
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
    db.all(`update user_account set fullName = ?, address = ?, phoneNumber = ?, email = ? where username = ?`, [data.fullName, data.address, data.phoneNumber, data.email, req.params.username], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else res.status(200).send({
            message: 'update information success'
        })
    })
})

users.patch('/password/:username', (req, res) => {
    const data = req.body
    db.all(`update user_account set password = ? where username = ? and password = ?`, [data.new, req.params.username, data.old], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else res.status(200).send({
            message: 'change password success'
        })
    })
})

export default users
