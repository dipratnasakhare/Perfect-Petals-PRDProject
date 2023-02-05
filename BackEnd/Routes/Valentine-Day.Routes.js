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
    let sunflowers = await Modelsunflowers.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    res.send({ sunflowers, totalPages: Math.ceil(length.length / limit) });
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Lilies", async (req, res) => {
  try {
    let ValentineDay = await ModelLilies.find();
    res.send(ValentineDay);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Exotic", async (req, res) => {
  try {
    let Exotic = await ModelExotic.find();
    res.send(Exotic);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Sweet_Flower", async (req, res) => {
  try {
    let SweetFlower = await ModelSweetFlower.find();
    res.send(SweetFlower);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Bright", async (req, res) => {
  try {
    let Bright = await ModelBright.find();
    res.send(Bright);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Alstroemeria", async (req, res) => {
  try {
    let Alstroemeria = await ModelAlstroemeria.find();
    res.send(Alstroemeria);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Gardenia_Plants", async (req, res) => {
  try {
    let GardeniaPlants = await ModelGardeniaPlants.find();
    res.send(GardeniaPlants);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

// flower by color

ValentineDay.get("/Red", async (req, res) => {
  try {
    let Red = await ModelRed.find();
    res.send(Red);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Purple", async (req, res) => {
  try {
    let Purple = await ModelPurple.find();
    res.send(Purple);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Green", async (req, res) => {
  try {
    let Green = await ModelGreen.find();
    res.send(Green);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

ValentineDay.get("/Blue", async (req, res) => {
  try {
    let Blue = await ModelBlue.find();
    res.send(Blue);
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

module.exports = { ValentineDay };
