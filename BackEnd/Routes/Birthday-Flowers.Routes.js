// BirthdayFlowers

const express = require("express");
const BirthdayFlowers = express.Router();

// Model import for adding user
const { ModelBirthdayFlowers } = require("../models/Birthday-Flowers.models");

BirthdayFlowers.get("/", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length = await ModelBirthdayFlowers.find();
    let BirthdayFlowers = await ModelBirthdayFlowers.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send({ BirthdayFlowers, totalPages: Math.ceil(length.length / limit) });
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: "Something went wrong please try again", status:'error' });
  }
});



module.exports = { BirthdayFlowers };
