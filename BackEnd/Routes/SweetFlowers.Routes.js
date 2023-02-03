
const express = require("express");
const SweetFlower = express.Router();

// Model import for adding user
const { ModelSweetFlower } = require("../models/SweetFlower.models")



SweetFlower.get("/", async (req, res) => {
    try {
        let valentine = await ModelSweetFlower.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// SweetFlower.get("/sum", async (req, res) => {
//     try {
//         let All_User = await ModelSweetFlower.insertMany();
//           res.status(200).send({ msg: "ModelSweetFlower updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { SweetFlower }