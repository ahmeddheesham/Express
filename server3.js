const express = require('express')
const bodyParser = require("body-parser") 
const app = express()

app.use(bodyParser.json())

let cars = [{"Model": 'BMW' , color: "red" , year: 2022} ]

app.get('/cars', function(req,res){
    res.json({"cars": cars , "status":200})
})

app.post('/cars', function(req,res){
    console.log(req.body)
    cars.push(req.body)
    res.json({status: 200, message: "Car added succsessfully"})
})

app.put('/cars/:name', function(req,res){
    let name = req.params.name
    console.log(name)


    cars.find((o,i) => {
        if (o.Model === name){
            cars[i] = req.body
            return true;
        }
        
    })

    res.json({message: "Car updated", status:200})
})


app.delete('/cars/:name', function(req,res){
    let name = req.params.name
    console.log(name)


    cars.find((o,i) => {
        if (o.Model === name){
            cars.splice(cars[i],1)
            return true;
        }
        
    })

    res.json({message: "Car Deleted", status:200})
})








app.listen(8800)