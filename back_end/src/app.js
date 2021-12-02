const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const { dirname } = require('path')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))


//Template engine
// app.engine('handlebars', handlebars());
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/home', (req, res) => {
  return res.render('home')
})

app.get('/donate', (req, res) => {
  return res.render('donate')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
