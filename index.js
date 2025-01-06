// import express from 'express';
// import mongoose from'mongoose';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';

// const app = express();
// //middleware for passing json request to body
// app.use(bodyParser.json());
// dotenv.config()
// ;
// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;
// mongoose.connect(MONGOURL).then(()=>{
//     console.log("Datbase connected");
//     app.listen(PORT,()=>{
//         console.log(`Server is running on port ${PORT}`)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// });

//...............next code........
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;
app.use('/api/user',router);

mongoose
     .connect(MONGOURL)
     .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
    })
    .catch((err)=>{
        console.log(err);
    });




