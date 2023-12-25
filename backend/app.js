import express from 'express';
import mongoose from 'mongoose';
const app=express();


mongoose.connect(
    "mongodb+srv://suyash:AX4udwjPvo1mRIEF@cluster0.cy5pvol.mongodb.net/BlopAppNew?retryWrites=true&w=majority")
.then(()=>app.listen(3001))
.then((()=>console.log('db connected')))
.catch((err)=>(console.log(err)))


// AX4udwjPvo1mRIEF
 