
const mongoose = require("mongoose");

const BrightSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelBright = mongoose.model(
  "Bright",
  BrightSchema
);

module.exports = { ModelBright };
