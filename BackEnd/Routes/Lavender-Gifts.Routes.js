// lavender-gifts
const express = require("express");
const LavenderGifts = express.Router();

// Model import for adding user
const { ModelLavenderGifts } = require("../models/Lavender-Gifts.models")



LavenderGifts.get("/", async (req, res) => {
    const { page = 1, limit = 8 } = req.query;

    
    try {
        let length = await ModelLavenderGifts.find()
        let LavenderGifts = await ModelLavenderGifts.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
          res.send({LavenderGifts:LavenderGifts, totalPages: Math.ceil(length.length / limit) });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err, status:"error"});
    }
})



module.exports = { LavenderGifts }