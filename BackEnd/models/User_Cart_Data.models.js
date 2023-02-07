const mongoose = require("mongoose");

const UserCartData = mongoose.Schema({
  UserId: { type: String },
  UserCartData: [
    {
      ImgUrl: { type: String },
      ImgUrlList: [{ type: String }],
      Name: { type: String },
      Price: { type: String },
      Basket: { type: String },
      Bought: { type: Number },
      Rating: { type: Number },
    },
  ],
});

const ModelUserCartData = mongoose.model("User_Cart_Data", UserCartData);

module.exports = { ModelUserCartData };
