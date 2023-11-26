const express = require('express')
const app = express()

// app.use('/users',function(req,res,next){
//     console.log("A new request recieved at" + new Date())
//     res.send("Error")
//     next();
// })

app.use('/users',function(req,res,next){
    console.log("A new request recieved at" + new Date())
    // res.send("Error")
    next();
})
app.get ('/users', function (req,res){
    res.send ("Hello from Mag Camp server2")
})

app.get ('/cars', function (req,res){
    res.send ("Hello from Cars Camp server2")
})

app.listen(8000)