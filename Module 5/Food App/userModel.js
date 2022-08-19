//tech knowledge
//(scheme) -> set of features and rules a certain entity should follow
const mongodb = require(`mongoose`)

let dblink = `mongodb+srv://dbUser:9YrdlRoCdYPC3aY1@cluster0.ovod3sb.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})