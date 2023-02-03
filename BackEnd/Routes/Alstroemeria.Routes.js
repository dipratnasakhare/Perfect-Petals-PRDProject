
const express = require("express");
const Alstroemeria = express.Router();

// Model import for adding user
const { ModelAlstroemeria } = require("../models/Alstroemeria.models")



Alstroemeria.get("/", async (req, res) => {
    try {
        let valentine = await ModelAlstroemeria.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// Alstroemeria.get("/sum", async (req, res) => {
//     try {
//         let All_User = await ModelAlstroemeria.insertMany();
//           res.status(200).send({ msg: "ModelAlstroemeria updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { Alstroemeria }