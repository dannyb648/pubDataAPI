const express = require('express')
const app = express()
const fs = ('fs')
const bodyParser = require('body-parser')

var cors = require('cors')

app.use(cors())

var pub = require('./pub.js')

app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 8080

app.use(function (req, res, next) {
  console.log(req.method, 'Request:', req.originalUrl)
  next()
})

app.get('/api/pub/', pub.getAll)
app.get('/api/pub/first', pub.getFirst)
app.get('/api/pub/time/:timestamp', pub.getTime)

//app.get('/api/pub/:pub/weather/', pub.getAllWeather)
//app.get('/api/pub/:pub/weather/:time', pub.getWeatherTime)

//app.get('/api/pub/:pub/temp/', pub.getAllTemp)
//app.get('/api/pub/:pub/temp/:time', pub.getWeatherTime)

//app.get('/api/pub/takings', pub.getEODTakings)
//app.get('/api/pub/takings/:time', pub.getTakings)




app.listen(PORT)
console.log('Pub Rest API running on Port: ' + PORT)

module.exports = app