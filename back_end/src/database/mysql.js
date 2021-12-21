import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

let connection

function handleDisconnect() {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    // connect to database
    connection.connect(err => {
        if (err) {
            console.log(err)
            setTimeout(handleDisconnect, 2000)
        }
    })

    connection.on('error', err => {
        console.log(err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect()
        }
    })
}

handleDisconnect()

export default connection
