
const express = require("express");
const Blue = express.Router();

// Model import for adding user
const { ModelBlue } = require("../models/Blue.models")



Blue.get("/", async (req, res) => {
    try {
        let valentine = await ModelBlue.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

Blue.get("/sum", async (req, res) => {
    try {
        let All_User = await ModelBlue.insertMany( );
          res.status(200).send({ msg: "ModelBlue updated" });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
    
})





module.exports = { Blue }