// lavender-gifts
const express = require("express");
const Lilies = express.Router();

// Model import for adding user
const { ModelLilies } = require("../models/Lilies.models")



Lilies.get("/Lilies", async (req, res) => {
    try {
        let valentine = await ModelLilies.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})






module.exports = { Lilies }