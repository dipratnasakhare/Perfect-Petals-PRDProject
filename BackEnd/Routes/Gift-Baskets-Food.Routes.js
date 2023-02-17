const express = require("express");
const GiftBasketsFood = express.Router();

// Model import for adding user
const { ModelGiftBasketsFood } = require("../models/Gift-Baskets-Food.models");

GiftBasketsFood.get("/", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length = await ModelGiftBasketsFood.find();
    let GiftBasketsFood = await ModelGiftBasketsFood.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.send({ GiftBasketsFood, totalPages: Math.ceil(length.length / limit) });
  } catch (err) {
    console.log(err, "err line 20");
    
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

module.exports = { GiftBasketsFood };
