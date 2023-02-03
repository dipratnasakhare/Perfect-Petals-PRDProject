
const mongoose = require("mongoose");

const PurpleSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelPurple = mongoose.model(
  "Purple",
  PurpleSchema
);

module.exports = { ModelPurple };
