
const express = require("express");
const Red = express.Router();

// Model import for adding user
const { ModelRed } = require("../models/Red.models")



Red.get("/", async (req, res) => {
    try {
        let valentine = await ModelRed.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

Red.get("/sum", async (req, res) => {
    try {
        let All_User = await ModelRed.insertMany(   );
          res.status(200).send({ msg: "ModelRed updated" });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
    
})





module.exports = { Red }