




const mongoose = require("mongoose");

const BirthdayFlowersSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelBirthdayFlowers = mongoose.model(
  "BirthdayFlowers",
  BirthdayFlowersSchema
);

module.exports = { ModelBirthdayFlowers };
