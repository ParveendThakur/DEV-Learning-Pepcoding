const express = require("express");

const app = express();

// case :1

app.get("/simple",function(req,res){
    res.send("Simple output 1")
})



app.listen(3000,function(){
    console.log("server is started at 3000");
})