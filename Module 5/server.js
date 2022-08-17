//require express
const express = require("express")

// you have to write it -> app signifies -> your server

const app = express();

//get karna hai data from sayHello
app.get("/sayhello",function(req,res){
    res.send("Hello from server");
})

//get kana hai data from sayBye
app.get("/sayBye",function(req,res){
    res.end("Bye");
})


app.listen(3000,function(){
    console.log("server started at port 3000")
});
