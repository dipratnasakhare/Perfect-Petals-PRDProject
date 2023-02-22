const express = require("express");
const { ModelAdminTask } = require("../models/AdminTask");
const { ModelUserAuth } = require("../models/UserAuth.Models");
const { ModelOrderDetails } = require("../models/UserOrderDetails");
const AdminSideRoutes = express.Router();

AdminSideRoutes.get("/users", async (req, res) => {
  try {

    let All_User = await ModelUserAuth.find();
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






AdminSideRoutes.post("/GetOrderForUser", async (req, res) => {
  const { UserId } = req.body;
  try {
    let Order_Details = await ModelOrderDetails.find({ UserId });
        res
        .status(200)
        .send({ Order_Details });
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


AdminSideRoutes.post("/Get-Admin-TaskList", async (req, res) => {
  let { UserId } = req.body
  try {
    let list =  await ModelAdminTask.findOne({ AdminId: UserId });
      res
      .status(200)
      .send({ list: list.AdminTask })
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

AdminSideRoutes.post("/Delete-Admin-TaskList", async (req, res) => {
  let { UserId , id} = req.body
  try {
    let list =  await ModelAdminTask.find({ AdminId: UserId });
    list = list[0]
    const d = list.AdminTask.filter((ele) => `${ele["_id"]}` !==  id)
    list.AdminTask = d
    await ModelAdminTask.updateOne({ AdminId: UserId }, list);
      res
      .status(200)
      .send({ msg: "Task is deleted", status: "success" })
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

AdminSideRoutes.post("/Toggle-Admin-TaskList", async (req, res) => {

  let { UserId , id} = req.body

  try {
    let list =  await ModelAdminTask.find({ AdminId: UserId });
    list = list[0]
    list.AdminTask.filter((ele, i) => {
      if(`${ele["_id"]}` ==  id){
        ele.Status = !ele.Status
        console.log(`${ele["_id"]}` ==  id,ele)
      }
    })
    await ModelAdminTask.updateOne({ AdminId: UserId }, list);
      res
      .status(200)
      .send({ msg: "Task is updates", status: "success" })
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});

AdminSideRoutes.post("/Update-Admin-TaskList", async (req, res) => {
  let { UserId , data, id} = req.body
  try {
    let list =  await ModelAdminTask.find({ AdminId: UserId });
    list = list[0]
    list.AdminTask.filter((ele, i) => {
      if(`${ele["_id"]}` ==  id){
        list.AdminTask[i] = data
      }
    })
    await ModelAdminTask.updateOne({ AdminId: UserId }, list);
      res
      .status(200)
      .send({ msg: "Task is updates", status: "success" })
  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});



AdminSideRoutes.post("/Admin-TaskList", async (req, res) => {
  let { UserId, data } = req.body

  data.Status = false
  try {
    let list =  await ModelAdminTask.findOne({ AdminId: UserId });

    if(typeof(list) == "object"){
      let list =  await ModelAdminTask.updateOne({ AdminId: UserId }, {$push: {AdminTask: data}});
      res
      .status(200)
      .send({ msg: "task is already", status: "success" })
    }

    if(list == null){
     const AdminList = {
      AdminId: UserId, 
      AdminTask: [data]
     }
      let pata =  new ModelAdminTask(AdminList);
      pata.save()
      res
      .status(200)
      .send({ msg: "task is added", status: "success" })
    }

  } catch (err) {
    console.log(err, "err line 20");
    res
      .status(200)
      .send({ msg: "Something went wrong please try again", status: "error" });
  }
});







module.exports = { AdminSideRoutes };
