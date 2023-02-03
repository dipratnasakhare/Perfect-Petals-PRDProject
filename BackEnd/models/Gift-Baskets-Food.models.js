const mongoose = require("mongoose");

const GiftBasketsFoodSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelGiftBasketsFood = mongoose.model(
  "Gift-Baskets-Food",
  GiftBasketsFoodSchema
);

module.exports = { ModelGiftBasketsFood };
