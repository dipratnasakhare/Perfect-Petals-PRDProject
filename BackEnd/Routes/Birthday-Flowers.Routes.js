// BirthdayFlowers


const express = require("express");
const BirthdayFlowers = express.Router();

// Model import for adding user
const { ModelBirthdayFlowers } = require("../models/Birthday-Flowers.models")



BirthdayFlowers.get("/", async (req, res) => {
    try {
        let valentine = await ModelBirthdayFlowers.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// 



module.exports = { BirthdayFlowers }