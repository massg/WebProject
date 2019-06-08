var express = require ('express')
var fs = require ('fs')
var mongojs = require ('mongojs')

var app = express()

var db = mongojs('mongodb://cluster0-shard-00-00-txins.mongodb.net:27017,cluster0-shard-00-01-txins.mongodb.net:27017,cluster0-shard-00-02-txins.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&authSource=admin', ['subjects'])

app.use(express.static('frontend'))
app.get('/',function(req, res){
//the main page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/home.html")
})

//to login to account
app.get('/rollsubmit',function(req,res){
  //the ejs file of branch.html and then to semester.html
  res.sendFile(__dirname+"/frontend/branch.html")
})
app.get('/branch',function(req, res){
//the semester page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/branch.html")
})

app.get('/sem',function(req, res){
//the subject page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/semester.html")
})

app.listen(8003, function(){
console.log("Server Initiated...")
})
