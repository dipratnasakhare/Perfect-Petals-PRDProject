const express = require("express");
const { ModelUserCartData } = require("../models/UserCartData.models");
const UserCartData = express.Router();

// Model import for adding user

UserCartData.post("/Post", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelUserCartData.find({ UserId });
    if (User_Details.length > 0) {
      User_Arr = User_Details[0].UserCartData;
      let newdata = req.body.UserCartData[0];

      for (let i = 0; i < User_Arr.length; i++) {
        if (`${User_Arr[i]["_id"]}` == newdata["_id"]) {
          res
            .status(200)
            .send({ msg: "Product is added already", status: "error" });
          return;
        }
      }
      await ModelUserCartData.updateOne(
        { UserId },
        { $push: { UserCartData: newdata } }
      );
      res
        .status(200)
        .send({ msg: "Product is added in cart", status: "success" });
    } else {
      let User_Data = new ModelUserCartData(req.body);
      User_Data.save();
      res
        .status(200)
        .send({ msg: "Product is added in cart", status: "success" });
    }
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserCartData.post("/", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelUserCartData.find({ UserId });
    if (User_Details.length > 0) {
      User_Arr = User_Details[0].UserCartData;
      res.status(200).send({ User_Arr: User_Arr });
    } else {
      res
        .status(200)
        .send({ msg: "Please add product in cart", status: "error" });
    }
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserCartData.post("/delete", async (req, res) => {
  const { UserId, id } = req.body;

  try {
    let User_Details = await ModelUserCartData.find({ UserId });

    User_Details = User_Details[0].UserCartData;

    User_Details = User_Details.filter((ele) => `${ele["_id"]}` !== `${id}`);

    await ModelUserCartData.updateOne(
      { UserId },
      { $pull: { UserCartData: { _id: id } } }
    );

    res
      .status(200)
      .send({ msg: "Product is deleted from cart", status: "success" });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserCartData.post("/Delete_User_data", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelUserCartData.deleteOne({ UserId });

    res.status(200).send({ msg: "Order is placed", status: "success" });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

module.exports = { UserCartData };
