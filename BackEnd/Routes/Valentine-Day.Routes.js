const express = require("express");
const ValentineDay = express.Router();

// Model import for adding user
const { ModelValentineDay } = require("../models/Valentine-Day.models")



ValentineDay.get("/", async (req, res) => {
    try {
        let valentine = await ModelValentineDay.find()
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})




module.exports = { ValentineDay }