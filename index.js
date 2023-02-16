const express = require('express')
const app = express()
const mongoose= require('mongoose')
app.use( express.json() )

const port = 5000
require('dotenv').config()

app.get(`/`, (req,res) => {

  res.send('hello e_commerce')
})

const useRoutes =require('./routes/user.router')

app.use('/users' ,useRoutes )

mongoose.connect('mongodb://127.0.0.1:27017/e_commerce',
   {
    useNewUrlParser : true,
    useUnifiedTopology :true
   }
)
const db = mongoose.connection;

db.on("error", console.error.bind(console,"connection error :"))

db.on("open",function(){
    console.log("dtbase connected ...")
})


app.listen(port,()=>{
    console.log(`app listing on port ${process.env.port}`)
})   