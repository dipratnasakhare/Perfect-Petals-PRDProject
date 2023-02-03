const express = require("express");
const GiftBasketsFood = express.Router();

// Model import for adding user
const { ModelGiftBasketsFood } = require("../models/Gift-Baskets-Food.models")



GiftBasketsFood.get("/", async (req, res) => {
    try {
        let valentine = await ModelGiftBasketsFood.find()
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// GiftBasketsFood.get("/", async (req, res) => {
//     try {
//         let All_User = await ModelGiftBasketsFood.insertMany();
//           res.status(200).send({ msg: "valentine updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { GiftBasketsFood }