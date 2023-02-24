const mongoose = require("mongoose");

const FlowersDataSchema = mongoose.Schema({
    ImgUrl: { type: String, require: true },
    ImgUrlList: [{ type: String, require: true }],
    Name: { type: String, require: true },
    Price: { type: String, require: true },
    Basket: { type: String, require: true },
    Bought: { type: Number, require: true },
    Rating: { type: Number, require: true },
    Type: { type: String, require: true },
    Comment: [
        {
            userAvtar: { type: String, require: false },
            user: { type: String, require: false },
            comment: { type: String, require: false },
            UserId: { type: String, require: false },
            productId: { type: String, require: false },
            Rating: { type: Number, require: false },
            Like: { type: Number, require: false }, 
            DisLike: { type: Number, require: false },
            Replay: [
                {
                    userAvtar: { type: String, require: false },
                    user: { type: String, require: false },
                    comment: { type: String, require: false },
                    UserId: { type: String, require: false },
                    Like: { type: Number, require: false },
                    DisLike: { type: Number, require: false },
                },
            ],
        },
    ],
});

const ModelFlowersData = mongoose.model("FlowersData", FlowersDataSchema);

module.exports = { ModelFlowersData };
