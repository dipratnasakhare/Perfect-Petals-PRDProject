


const mongoose = require("mongoose");

const AlstroemeriaSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelAlstroemeria = mongoose.model(
  "Alstroemeria",
  AlstroemeriaSchema
);

module.exports = { ModelAlstroemeria };
