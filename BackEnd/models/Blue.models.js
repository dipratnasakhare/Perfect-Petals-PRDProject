
const mongoose = require("mongoose");

const BlueSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelBlue = mongoose.model(
  "Blue",
  BlueSchema
);

module.exports = { ModelBlue };
