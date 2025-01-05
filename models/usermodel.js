// import { name } from "ejs";
// import mongoose from "mongoose";

// const userShema = mongoose.Schema({
//     name:{
//         type: String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     address:{
//         type:String,
//         required:true
//     }
// });
// export default mongoose.model("users",userShema);




import mongoose from 'mongoose';

const usershema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});
export default mongoose.model("users",usershema);