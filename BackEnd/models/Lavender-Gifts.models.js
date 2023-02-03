
const mongoose = require("mongoose");

const LavenderGiftsSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelLavenderGifts = mongoose.model(
  "Lavender-Gifts",
  LavenderGiftsSchema
);

module.exports = { ModelLavenderGifts };
