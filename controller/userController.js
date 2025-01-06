<<<<<<< HEAD
// // import user from "../model/usermodel.js";
// // export const create=async(req,res)=>{
// //     try{
// //         let userdata=new user(req,body);
// //         const{email} =userdata;
// //         const userExist=await user.findOne({email})
// //         if(userExist){
// //            return res.status(400).json({message:"user already exist"})
// //         }
// //         const saveduser=await userdata.save()
// //         res.status(200).json({saveduser})
// //     }
// //     catch(err){
// //         res.status(500).json({error:"internal server error"})
// //     }
// // }
// // export const fetch=async(req,res)=>{
// //     try{
// //         const users=await user.find();
// //         if(users.length==0){
// //             return res.status(404).json({message:"no user found"})
// //         }
// //         res.status(200).json({users});
        
// //     }
// //     catch(err){
// //         res.status(500).json({error:"internal server error"})
// //     }
// // }
// // export const update=async(req,res)=>{
// //     try{
// //         const id=req.params.id;
// //         const userExist=await user.findOne({_id:id})
// //         if(!userExist){
// //             return res.status(404).json({message:"no user found"})
// //         }
// //         const updateUser=await user.findByIdAndUpdate(id,req.body,{new:true});
// //         res.status(200).json({users});
        
// //     }
// //     catch(err){
// //         res.status(500).json({error:"internal server error"})
// //     }
// // }

// import user from "../models/usermodel.js";
// export const create=async(req,res)=>{
//     try{
//         let userdata=new user(req.body);
=======
// import user from "../model/usermodel.js";
// export const create=async(req,res)=>{
//     try{
//         let userdata=new user(req,body);
>>>>>>> bb71f4d27c78c1c09334c25a0e8d8858adaf239d
//         const{email} =userdata;
//         const userExist=await user.findOne({email})
//         if(userExist){
//            return res.status(400).json({message:"user already exist"})
//         }
//         const saveduser=await userdata.save()
//         res.status(200).json({saveduser})
//     }
//     catch(err){
//         res.status(500).json({error:"internal server error"})
//     }
// }
<<<<<<< HEAD




// export const fetch=async(req,res)=>{
//     try{
//         const users = await user.find();
//         if(users.length===0){
=======
// export const fetch=async(req,res)=>{
//     try{
//         const users=await user.find();
//         if(users.length==0){
>>>>>>> bb71f4d27c78c1c09334c25a0e8d8858adaf239d
//             return res.status(404).json({message:"no user found"})
//         }
//         res.status(200).json({users});
        
//     }
//     catch(err){
//         res.status(500).json({error:"internal server error"})
//     }
// }
<<<<<<< HEAD

// export const update=async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const userExist=await user.findOne({_id:id});
//         if(!userExist){
//             return res.status(404).json({message:"user not found"})
//         }
//         const updateduser=await user.findByIdAndUpdate(id,req.body,{new:true});
//         res.status(200).json({updatedUser})
=======
// export const update=async(req,res)=>{
//     try{
//         const id=req.params.id;
//         const userExist=await user.findOne({_id:id})
//         if(!userExist){
//             return res.status(404).json({message:"no user found"})
//         }
//         const updateUser=await user.findByIdAndUpdate(id,req.body,{new:true});
//         res.status(200).json({users});
>>>>>>> bb71f4d27c78c1c09334c25a0e8d8858adaf239d
        
//     }
//     catch(err){
//         res.status(500).json({error:"internal server error"})
//     }
// }
<<<<<<< HEAD
import user from '../models/usermodel.js';// Import the user model
export const create = async (req, res) => {
try{
    let userdata = new user(req.body);
    const {email}=userdata;
    const userExist=await user.findOne({email});
    if(userExist){
        return res.status(400).json({message:"User already exist"});
    }
     const saveduser=await userdata.save();
    res.status(200).json({saveduser});
}
catch(err){
    
    res.status(500).json({err:"Internal server error" })
}
}


export const fetch = async (req, res) => {

    try {
        const users = await user.find();
        if(users.length===0){
            return res.status(404).json({message:"No users found"});
        }
        //res.status(200).json({users});
        res.status(200).json({users});// this for create user
    }
    catch (err){
        res.status(500).json({error:"Internal server error" })
    }
}


export const update = async (req, res) => {

    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser =await user.findByIdAndUpdate (id, req.body, {new:true});
        res.status(200).json({updateUser});
    }
    catch (err){
        res.status(500).json({error:"Internal server error" })
    }
}

export const deleteUser = async (req, res) => {

    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
    }
    catch (err){
        res.status(500).json({error:"Internal server error" })
    }
}
=======

import user from "../models/usermodel.js";
export const create=async(req,res)=>{
    try{
        let userdata=new user(req.body);
        const{email} =userdata;
        const userExist=await user.findOne({email})
        if(userExist){
           return res.status(400).json({message:"user already exist"})
        }
        const saveduser=await userdata.save()
        res.status(200).json({saveduser})
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}




export const fetch=async(req,res)=>{
    try{
        const users = await user.find();
        if(users.length===0){
            return res.status(404).json({message:"no user found"})
        }
        res.status(200).json({users});
        
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}

export const update=async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"user not found"})
        }
        const updateduser=await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updatedUser})
        
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}
>>>>>>> bb71f4d27c78c1c09334c25a0e8d8858adaf239d
