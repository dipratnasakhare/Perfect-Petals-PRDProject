const express = require("express");
const { ModelUserWishlist } = require("../models/User-Wishlist.models");
const UserWishlist = express.Router();

// Model import for adding user

UserWishlist.post("/Post", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelUserWishlist.find({ UserId });

    if (User_Details.length > 0) {
      User_Arr = User_Details[0].UserWishlist;
      let newdata = req.body.UserWishlist[0];

      for (let i = 0; i < User_Arr.length; i++) {
        if (`${User_Arr[i]["_id"]}` == newdata["_id"]) {
          res
            .status(200)
            .send({
              msg: "Product is added already in wishlist",
              status: "error",
            });
          return;
        }
      }
      await ModelUserWishlist.updateOne(
        { UserId },
        { $push: { UserWishlist: newdata } }
      );
      res
        .status(200)
        .send({ msg: "Product is added in wishlist", status: "success" });
    } else {
      let User_Data = new ModelUserWishlist(req.body);
      User_Data.save();
      res
        .status(200)
        .send({ msg: "Product is added in wishlist", status: "success" });
    }
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserWishlist.post("/", async (req, res) => {
  const { UserId } = req.body;
  // const { page = 1, limit = 8 } = req.query;
  try {
    let User_Details = await ModelUserWishlist.find({ UserId });
    if (User_Details.length > 0) {
      User_Arr = User_Details[0].UserWishlist;
      res.status(200).send({ User_Arr: User_Arr });
    } else {
      res
        .status(200)
        .send({
          msg: "Please is add product in your wishlist",
          status: "error",
        });
    }
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserWishlist.post("/delete", async (req, res) => {
  const { UserId, id } = req.body;

  try {
    let User_Details = await ModelUserWishlist.find({ UserId });

    User_Details = User_Details[0].UserWishlist;

    User_Details = User_Details.filter((ele) => `${ele["_id"]}` !== `${id}`);

    await ModelUserWishlist.updateOne(
      { UserId },
      { $pull: { UserWishlist: { _id: id } } }
    );

    res
      .status(200)
      .send({ msg: "Product is deleted from wishlist", status: "success" });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

UserWishlist.post("/Delete_User_data", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelUserWishlist.deleteOne({ UserId });

    res.status(200).send({ msg: "Order is placed", status: "success" });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

module.exports = { UserWishlist };
