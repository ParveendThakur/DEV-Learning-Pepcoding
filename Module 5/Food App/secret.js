//signup input:
//name,
//password
//confirm password
//address
//email
//phone
//pic


app.post("/signup",async function(req,res){
    let data = req.body;
    console.log(data);
    let newUser =await userModel.create(data);
    res.json({      
        message:"data recieved",
        data:data
    })
})


app.listen(3000,function(){