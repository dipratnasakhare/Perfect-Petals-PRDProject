const mongoose = require("mongoose");

const OrderDetails = mongoose.Schema({
  UserId: { type: String },
  TotalPrice: { type: Number },
  OrderDetails: [
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

const ModelOrderDetails = mongoose.model("OrderDetails", OrderDetails);

module.exports = { ModelOrderDetails };
