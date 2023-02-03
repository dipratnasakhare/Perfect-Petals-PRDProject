
const mongoose = require("mongoose");

const RedSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelRed = mongoose.model(
  "Red",
  RedSchema
);

module.exports = { ModelRed };
