//tech knowledge
//(scheme) -> set of features and rules a certain entity should follow

import password from "./secrets"
const mongodb = require("mongoose")

let dblink = `mongodb+srv://dbUser:${password}@cluster0.ovod3sb.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})