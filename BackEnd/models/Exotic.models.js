
const mongoose = require("mongoose");

const ExoticSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelExotic = mongoose.model(
  "Exotic",
  ExoticSchema
);

module.exports = { ModelExotic };
