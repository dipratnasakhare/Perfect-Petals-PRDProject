
const mongoose = require("mongoose");

const LiliesSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelLilies = mongoose.model(
  "Lilies",
  LiliesSchema
);

module.exports = { ModelLilies };
