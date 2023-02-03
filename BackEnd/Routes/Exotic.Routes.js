
const express = require("express");
const Exotic = express.Router();

// Model import for adding user
const { ModelExotic } = require("../models/Exotic.models")



Exotic.get("/", async (req, res) => {
    try {
        let valentine = await ModelExotic.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// Exotic.get("/sum", async (req, res) => {
//     try {
//         let All_User = await ModelExotic.insertMany();
//           res.status(200).send({ msg: "ModelExotic updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { Exotic }