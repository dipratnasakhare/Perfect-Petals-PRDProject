const mongoose = require("mongoose");

const OrderDetails = mongoose.Schema({
  UserId: { type: String },
  TotalPrice: { type: Number },
  Status: { type: String },
  OrderDetails: [
    {
      ImgUrl: { type: String },
      ImgUrlList: [{ type: String }],
      Name: { type: String },
      Price: { type: String },
      Basket: { type: String },
      Bought: { type: Number },
      Rating: { type: Number ,  require:false},
      Date: { type: String , require:false},

    },
  ],
});

const ModelOrderDetails = mongoose.model("OrderDetails", OrderDetails);

module.exports = { ModelOrderDetails };
