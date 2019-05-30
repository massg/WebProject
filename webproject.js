var express = require ('express')
var fs = require ('fs')
var mongojs = require ('mongojs')

var app = express()

//var db = mongojs('mongodb://easygrade:abc123123@cluster0-shard-00-00-txins.mongodb.net:27017,cluster0-shard-00-01-txins.mongodb.net:27017,cluster0-shard-00-02-txins.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&authSource=admin', ['subjects'])

app.use(express.static('frontend'))
app.get('/',function(req, res){
//the main page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/home.html")
})

app.get('/:college',function(req, res){
//the page for branch
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/branch.html") // this could be ejs lets make it in html it self for now 
})
	
app.get('/branch',function(req, res){
//the semester page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/semester.html")
})

app.get('/:semester',function(req, res){
//the subject page
    //res.send("hey yo people")
    res.sendFile(__dirname+"/frontend/subjects.html")
})	

app.listen(8001, function(){
console.log("Server Initiated...")
})
