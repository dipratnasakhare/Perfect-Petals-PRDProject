
const mongoose = require("mongoose");

const GardeniaPlantsSchema = mongoose.Schema({
    ImgUrl: { type: String },
    ImgUrlList:[{ type: String }],
    Name: { type: String },
    Price: { type: String },
    Basket: { type: String },
    Bought: { type: Number },
    Rating: { type: Number }
});

const ModelGardeniaPlants = mongoose.model(
  "Gardenia-Plants",
  GardeniaPlantsSchema
);

module.exports = { ModelGardeniaPlants };
