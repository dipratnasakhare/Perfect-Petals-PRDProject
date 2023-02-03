const mongoose = require("mongoose");

const ValentineDaySchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelValentineDay = mongoose.model(
  "Valentine-Day",
  ValentineDaySchema
);

module.exports = { ModelValentineDay };
