//Gardenia-Plants

const express = require("express");
const GardeniaPlants = express.Router();

// Model import for adding user
const { ModelGardeniaPlants } = require("../models/Gardenia-Plants.models")



GardeniaPlants.get("/", async (req, res) => {
    try {
        let valentine = await ModelGardeniaPlants.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// GardeniaPlants.get("/sum", async (req, res) => {
//     try {
//         let All_User = await ModelGardeniaPlants.insertMany();
//           res.status(200).send({ msg: "ModelGardeniaPlants updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { GardeniaPlants }