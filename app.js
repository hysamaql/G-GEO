var express = require('express')

var app = express() 

app.get('/', function (req, res) {
  console.log('hello') 
  res.send('Hi there')
})


app.listen(3000)