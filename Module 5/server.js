//require express
const express = require("express")

// you have to write it -> app signifies -> your server

const app = express();

app.get("/",function(req,res){
    res.send("Homepage");
})

// get karna hai data from sayHello
app.get("/sayhello",function(req,res){
    res.send("Hello from server");
})

app.post("/sayHello",function(req,res){
    console.log(req);
    res.send("post wala Hello");
})



// get kana hai data from sayBye
app.get("/sayBye",function(req,res){
    res.send("Bye");
})

// 3000 - address of a server -> on a given machine
app.listen(3000,function(){
    console.log("server started at port 3000")
})
