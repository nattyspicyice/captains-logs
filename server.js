//Import Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 5500
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware


//Connect to Mongoose and Remove Deprication Warnings
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("connected to mongo")
})

//INDUCES

//Index Route

//New Route
app.get('/logs/new', (req, res) => {
    res.render('new')
    res.redirect('/logs')
})

//Delete Route

//Update Route

//Create Route
app.post('/logs', (req, res) => {
    Logs.create(req.body, (error, createdLogs) => {
        res.send(req.body)
    })
})

//Edit Route

//Show Route

//Port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})