// BirthdayFlowers


const express = require("express");
const BirthdayFlowers = express.Router();

// Model import for adding user
const { ModelBirthdayFlowers } = require("../models/Birthday-Flowers.models")



BirthdayFlowers.get("/", async (req, res) => {
    try {
        let BirthdayFlowers = await ModelBirthdayFlowers.find()
          res.send(BirthdayFlowers);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err});
    }
})

// 



module.exports = { BirthdayFlowers }