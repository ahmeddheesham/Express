const express = require('express')
const app = express()

app.get ('/users/:id/:name', function (req,res){
    res.send ("Hello from Mag Camp server" + ' ' + req.params.id + ' ' + "My name is" + ' ' + req.params.name)
})
app.listen(8080)