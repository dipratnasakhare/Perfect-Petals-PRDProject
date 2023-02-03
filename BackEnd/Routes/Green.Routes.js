
const express = require("express");
const Green = express.Router();

// Model import for adding user
const { ModelGreen } = require("../models/Green.models")



Green.get("/", async (req, res) => {
    try {
        let valentine = await ModelGreen.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

Green.get("/sum", async (req, res) => {
    try {
        let All_User = await ModelGreen.insertMany();
          res.status(200).send({ msg: "ModelGreen updated" });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
    
})





module.exports = { Green }