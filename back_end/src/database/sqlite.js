import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose()

const db = new sqlite.Database('./src/database/happychildren.db', sqlite.OPEN_READWRITE, err => {
    if (err) {
        return console.error(err)
    }

    console.log('connection succesful')
})

export default db
