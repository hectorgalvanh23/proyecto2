var express = require("express");
var app = express();
var bodyParser=require("body-parser");


app.use(bodyParser.json());// Application/JSON
app.use(bodyParser.urlencoded({extends:true}));
app.set("view engine","jade");

app.get("/profile", function(req, res){
    var nombreUsuario="Hector Galvan";
    var fechaNacimiento="15/09/1992";
    var curp="";
    var RFC="";
    var domicilio="";
    var habiidades=["habilidad1","habilidad2","habilidad3"]
    
    
   res.render("profile",{nombreUsuario:nombreUsuario,
                        fechaNacimiento:fechaNacimiento,
                        curp:curp,
                        RFC:RFC,
                        domicilio:domicilio,
                        habilidades:habiidades
   }); 
});
//comentario


app.listen(8080);