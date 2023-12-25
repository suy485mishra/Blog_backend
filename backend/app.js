import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();

//this middleware helps in parsing data into json format
app.use(express.json());
//now to provide idea to app that we are using routes->middleware
app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://suyash:AX4udwjPvo1mRIEF@cluster0.cy5pvol.mongodb.net/BlopAppNew?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3001))
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));
