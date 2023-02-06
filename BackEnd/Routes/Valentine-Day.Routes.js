const express = require("express");
const ValentineDay = express.Router();

// Model import for adding user
const { ModelValentineDay } = require("../models/Valentine-Day.models");

const { Modelsunflowers } = require("../models/sunflowers.models");
const { ModelLilies } = require("../models/Lilies.models");
const { ModelExotic } = require("../models/Exotic.models");
const { ModelSweetFlower } = require("../models/SweetFlower.models");
const { ModelBright } = require("../models/Bright.models");
const { ModelAlstroemeria } = require("../models/Alstroemeria.models");
const { ModelGardeniaPlants } = require("../models/Gardenia-Plants.models");
const { ModelRed } = require("../models/Red.models");
const { ModelPurple } = require("../models/Purple.models");
const { ModelGreen } = require("../models/Green.models");
const { ModelBlue } = require("../models/Blue.models");

ValentineDay.get("/", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length = await ModelValentineDay.find();
    let valentine = await ModelValentineDay.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.send({
      valentine,
      totalPages: Math.ceil(length.length / limit),
    });
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

// Filter by flower

ValentineDay.get("/Sunflowers", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length = await Modelsunflowers.find();
    let Sunflowers = await Modelsunflowers.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    res.send({ Sunflowers, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Lilies", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelLilies.find();
    let Lilies = await ModelLilies.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
  res.send({ Lilies, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Exotic", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelExotic.find();
    let Exotic = await ModelExotic.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Exotic, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Sweet_Flower", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelSweetFlower.find();
    let Sweet_Flower = await ModelSweetFlower.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Sweet_Flower, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Bright_Flower", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelBright.find();
    let Bright_Flower = await ModelBright.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Bright_Flower, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Alstroemeria", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;


  try {
    let length =  await ModelAlstroemeria.find();
    let Alstroemeria = await ModelAlstroemeria.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Alstroemeria, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Gardenia_Plants", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelGardeniaPlants.find();
    let Gardenia_Plants = await ModelGardeniaPlants.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Gardenia_Plants, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

// flower by color

ValentineDay.get("/Red", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelRed.find();
    let Red = await ModelRed.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Red, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Purple", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelPurple.find();
    let Purple = await ModelPurple.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Purple, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Green", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelGreen.find();
    let Green = await ModelGreen.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Green, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Blue", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

  try {
    let length =  await ModelBlue.find();
    let Blue = await ModelBlue.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
   res.send({ Blue, totalPages: Math.ceil(length.length / limit)});
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

module.exports = { ValentineDay };
