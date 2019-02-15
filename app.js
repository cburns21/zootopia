const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')
var cors = require('cors')
var bodyParser = require('body-parser');
const dotenv = require('dotenv').config()

app.use(cors())
app.use(bodyParser.json());

app.get('/', function(req, res, next){
    knex('animals')
    .then((animals) => {
        res.send(animals)
    })
    .catch((err) => {
        next(err)
    })
})

app.get('/cops', function(req, res, next){
    knex('cops')
    .then((cops) => {
        res.send(cops)
    })
    .catch((err) => {
        next(err)
    })
})

app.get('/districts', function(req, res, next){
    return knex('districts')
        .join('cases', 'cases.district_id', 'districts.id')
    .then((districts) => {
        res.send(districts)
    })
    .catch((err) => {
        next(err)
    })
})

app.get('/', function(req, res, next){
    knex('cases')
    .then((cases) => {
        res.send(cases)
    })
    .catch((err) => {
        next(err)
    })
})



app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
