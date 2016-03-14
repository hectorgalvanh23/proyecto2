var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var log4js=require("log4js");


app.use(bodyParser.json());// Application/JSON
app.use(bodyParser.urlencoded({extends:true}));
app.set("view engine","jade");

app.get("/", function(req, res){
   res.render("index"); 
});
//comentario


app.listen(8080);