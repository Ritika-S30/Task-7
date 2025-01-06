const express = require('express');
let router =express.Router();


// router.get("/",(req,res)=>{
//     res.send ("user information");
// })
// router.get("/newuser",(req,res)=>{
//     res.send("new user added");
// })
 router.post("/createuser",(req,res)=>{
    res.send("Add new user added");
})



router
.route('/:id')
.get((req,res)=>{
    console.log(req.usery);
    res.send(" retrive id value" +req.params.id);

})
.put((req,res)=>{
    res.send(" update this id  value" +req.params.id);

})
.delete((req,res)=>{
    res.send("delete this id value" +req.params.id);
    
})
const users =[{name:"tae"},{name:"kookie"},{name:"vjk"}];
router.param("id",(req,res,next,id)=>{
    console.log(id);
    req.usery =users[id];
    next();
})

    

//module.exports=router;


//route.get('/:id'.((req,res)=>{
    //res.send(" retrive id value" +req.params.id);
//})




















//app.get("/user/deleteuser",(req,res)=>{
    //res.send("new user delete");
//})