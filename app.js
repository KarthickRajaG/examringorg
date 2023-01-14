const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoSanitize = require('express-mongo-sanitize')
const path = require('path')

const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors('*'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Data sanitization against NoSql query injection
app.use(mongoSanitize())

app.get("/",(req,res) =>{
    res.status(200).json({
        status:true,
        msg:"working...",
    })
})

var publicDir = path.join(__dirname,'/')
app.use(express.static(publicDir))

//routers
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')


// router middlewares
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/admin", adminRoutes)


// to handled unregister endpoint
app.all('*',(req,res,next) =>{
    res.status(404).send({message:`Can't find ${req.originalUrl} on this server!`})
})


module.exports = app