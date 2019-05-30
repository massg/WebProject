var express = require ('express')
var fs = require ('fs')
var mongojs = require ('mongojs')

var app = express()

var db = mongojs('mongodb://easygrade:abc123123@cluster0-shard-00-00-txins.mongodb.net:27017,cluster0-shard-00-01-txins.mongodb.net:27017,cluster0-shard-00-02-txins.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&authSource=admin', ['subjects'])

app.use(express.static('frontend'))
app.get('/',function(req, res){
//the main page
})