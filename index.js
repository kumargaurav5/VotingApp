const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db =require("./db")
require("dotenv").config();
app.use(bodyParser.json())

const userroutes = require("./routes/UserRoutes")
const candidateroutes = require("./routes/CandidateRoutes")

app.use('/user' , userroutes)
app.use('/candidate' , candidateroutes)

app.get("/",(req,res)=>{
    res.send("This is Voting Machine website ")
})

app.listen(port,()=>{
    console.log(`Listening to port 3000`)
})