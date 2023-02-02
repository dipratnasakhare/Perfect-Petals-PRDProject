const mongoose = require("mongoose");

const ValentineFlowerSchema = mongoose.Schema({
  ImgUrl: { type: String },
  ImgList: [{ type: String }],
  Name: { type: String },
  Price: { type: String },
  Bougth: 0,
});

const ModelValentineFlower = mongoose.model(
  "valentineflower",
  ValentineFlowerSchema
);

module.exports = { ModelValentineFlower };
