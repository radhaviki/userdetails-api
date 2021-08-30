import express from "express";
import mongoose from "mongoose";
import UserDetails from "./controller/userdetailscontroller.js";

let URL = "mongodb+srv://admin:admin@cluster0.u7bde.mongodb.net/demo";

mongoose.Promise = global.Promise;
mongoose
  .connect(URL)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((e) => console.log("mongoDB connect failed", e));

let app = express();
app.use(express.urlencoded());
app.use(express.json());
let port = process.env.PORT || 8080;

let listenerCallback = () => {
  console.log(port);
};

app.listen(port, listenerCallback);

app.use("/api", UserDetails);
