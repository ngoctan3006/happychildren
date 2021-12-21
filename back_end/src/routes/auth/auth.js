import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export default (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    const token = authorizationHeader.split(' ')[1]
    if(!token) {
        res.status(401).send({
            message: 'token error'
        })
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) {
                res.status(403).send(err)
            } else next()
        })
    }
}
