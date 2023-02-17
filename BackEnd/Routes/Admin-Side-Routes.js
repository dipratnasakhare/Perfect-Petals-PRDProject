const express = require("express");
const { ModelUserAuth } = require("../models/UserAuth.Models");
const { ModelOrderDetails } = require("../models/UserOrderDetails");
const AdminSideRoutes = express.Router();

AdminSideRoutes.get("/users", async (req, res) => {
  try {

    let All_User = await ModelUserAuth.find({ user_type: "Client" });
    res.status(200).send({ count: All_User.length });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({
        msg: "Something went wrong please try again",
        err,
        status: "error",
      });
  }
});

AdminSideRoutes.post("/OrderPost", async (req, res) => {
  const { UserId } = req.body;

  try {
    let User_Details = await ModelOrderDetails.find({ UserId });

    if (User_Details.length > 0) {
      User_Arr = User_Details[0].OrderDetails;
      let newdata = req.body.OrderDetails[0];
      user_total = User_Details[0].TotalPrice;
      let TotalPrice = req.body.TotalPrice + user_total;

      await ModelOrderDetails.updateOne({ UserId }, { $set: { TotalPrice } });
      await ModelOrderDetails.updateOne(
        { UserId },
        { $push: { OrderDetails: newdata } }
      );
      await ModelOrderDetails.updateOne(
        { UserId },
        { $set: { Status: "progress" } }
      );

      res
        .status(200)
        .send({ msg: "Order history is updated", status: "success" });
    } else {
      let User_Data = new ModelOrderDetails(req.body);
      User_Data.save();

      res
        .status(200)
        .send({ msg: "Order history is created", status: "success" });
    }
  } catch (err) {
    console.log(err, "err line 20");

    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

AdminSideRoutes.get("/OrderGet", async (req, res) => {
  const { page = 1, limit = 1 } = req.query;

  try {
    let length = await ModelOrderDetails.find();
    if(limit == 1){
      res.send({orderList:length});
    }
    let data = await ModelOrderDetails.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);

  res.send({
    orderList:data,
    totalPages: Math.ceil(length.length / limit),
  });
  } catch (err) {
    console.log(err, "err line 20");

    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});


AdminSideRoutes.post("/Admin-get", async (req, res) => {
  let { UserId } = req.body
  try {
    let data =  await ModelUserAuth.findOne({ UserId });
    res.send({ data });
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});











module.exports = { AdminSideRoutes };
