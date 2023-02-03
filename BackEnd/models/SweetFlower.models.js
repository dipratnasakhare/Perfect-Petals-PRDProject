const mongoose = require("mongoose");

const SweetFlowerSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelSweetFlower = mongoose.model(
  "SweetFlower",
  SweetFlowerSchema
);

module.exports = { ModelSweetFlower };
