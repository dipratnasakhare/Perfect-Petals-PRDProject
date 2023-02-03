const mongoose = require("mongoose");

const sunflowersSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const Modelsunflowers = mongoose.model(
  "sunflowers",
  sunflowersSchema
);

module.exports = { Modelsunflowers };
