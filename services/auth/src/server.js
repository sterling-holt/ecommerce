const express = require('express')
//  const router = require('./routes/')
const app = express()
const port = 3000
const item = require('./routes/item')

//  --------------------

app.use( "/item", item )




//  app.get('/', (req, res) => {
//      
//      let test = {
//          size: 'md',
//          color: 'green',
//      }
//      
//      res.send(test).json()
//  })

//  app.post('/', (req, res) => {
//      res.send('Generic POST response')
//  })

//  --------------------

app.listen(port)