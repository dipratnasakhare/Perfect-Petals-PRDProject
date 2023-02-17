const mongoose = require("mongoose");

const ValentineDaySchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number },
    Comment: [{  
      user :{type:String}, 
      comment:{type:String}, 
      UserId:{type:String}, 
      productId:{type:String},
      Rating:{type:Number}, 
      Like:{type:Number},
      UserId:{type:String}, 
    }]

});

const ModelValentineDay = mongoose.model(
  "Valentine-Day",
  ValentineDaySchema
);

module.exports = { ModelValentineDay };
