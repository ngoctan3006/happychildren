import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tan30062000',
  database: 'happychildren',
})

// connect to database
connection.connect(function (err) {
  if (err) throw err
})

export default connection
