const express = require("express");
const UserAuthRoutes = express.Router();

// MOdel import here
const { ModelUserAuth } = require("../models/UserAuth.Model")



UserAuthRoutes.get("/",  (req, res) => {
    // try {
        res.send({msg:"getting the data"});


})


UserAuthRoutes.post("/register",  (req, res) => {
    const UserDetails = req.body;

    console.log(UserDetails)
    try {
        let NewUser = new ModelUserAuth(UserDetails);
         NewUser.save();
        res.status(200).send("User has been created");

    } catch (err) {
        console.log(err);
        res.status(404).send({ msg: "User has not created", err });
    }

});


module.exports = { UserAuthRoutes }