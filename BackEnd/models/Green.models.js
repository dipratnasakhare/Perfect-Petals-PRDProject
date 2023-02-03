
const mongoose = require("mongoose");

const GreenSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelGreen = mongoose.model(
  "Green",
  GreenSchema
);

module.exports = { ModelGreen };
