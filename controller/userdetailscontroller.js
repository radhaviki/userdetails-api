import express from "express";
import userSchema from "../model/userDetail.js";

let UsersRoutes = express.Router();

UsersRoutes.route("/userdetail/getuserdetail").get((request, responce) => {
  userSchema.find({}, function (err, user) {
    if (err) responce.send(err);
    console.log("inside getuserdetails ...", user);
    responce.json(user);
  });

});

UsersRoutes.route("/userdetail/save").post((req,res) => {
    
    let userData = new userSchema(req.body);
    console.log(userData)
    userData.save(function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
      });
});

export default UsersRoutes;
