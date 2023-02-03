const express = require("express");
const sunflowers = express.Router();

// Model import for adding user
const { Modelsunflowers } = require("../models/sunflowers.models")



sunflowers.get("/", async (req, res) => {
    try {
        let sunflowers = await Modelsunflowers.find()
          res.send(sunflowers);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"sunflowers not updated" });
    }
})




module.exports = { sunflowers }