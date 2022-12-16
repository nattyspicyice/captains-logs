//Import Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Logs = require('./models/logs')
const port = 5500
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use((req, res, next) => {
    console.log("I run on all routes")
    next();
})

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

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
app.get('/logs', (req, res) => {
    Logs.find({}, (error, allLogs) => {
        res.render('Index', {logs: allLogs})
    })
})

//New Route
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Delete Route
app.delete('/logs/:id', (req, res) => {
    Logs.findByIdAndRemove(req.params.id, (err, deletedLogs) => {
        console.log(deletedLogs)
        res.redirect('/logs')
    })
})

//Update Route
app.put('/logs/:id', (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    })
})

//Create Route
app.post('/logs', (req, res) => {
    const {title, entry, shipIsBroken} = req.body
    const logBody = {
        title,
        entry,
        shipIsBroken : !shipIsBroken? false: true
    }
    Logs.create(logBody, (err, createdLog) =>{
        res.redirect('/logs')
    })
})

//Edit Route
app.get('/logs/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        if(!err){
            res.render(
                "Edit", {
                    logs: foundLogs
                }
            )
        } else {
            res.send({msg: err.message})
        }
    })
})

//Show Route
app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        res.render("Show", {
            logs: foundLogs
        })
    })
})

//Port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})