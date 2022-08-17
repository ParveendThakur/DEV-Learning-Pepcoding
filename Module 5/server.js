//require express
const express = require("express")

// you have to write it -> app signifies -> your server

const app = express();

app.get("/",function(req,res){
    res.send("Hello from server");
})

app.listen(300,function(){
    console.log("server started at port 300")
});