const express =require('express');
const app =express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    //console.log('vr')
    res.send("Hello world");
    //res.render("index",{text:"world"});
});

// app.get("/user",(req,res)=>{
//     res.send ("user information");
// })
// app.get("/user/newuser",(req,res)=>{
//     res.send("new user added");
// })
// app.get("/user/deleteuser",(req,res)=>{
//     res.send("new user delete");
// })

const userRoute =require("./routes/user");
app.use("/user",userRoute);
app.listen(3000);