const mongoose = require("mongoose");

const UserWishlist = mongoose.Schema({
  UserId: { type: String },
  UserWishlist: [
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

const ModelUserWishlist = mongoose.model("UserWishlist", UserWishlist);

module.exports = { ModelUserWishlist };
