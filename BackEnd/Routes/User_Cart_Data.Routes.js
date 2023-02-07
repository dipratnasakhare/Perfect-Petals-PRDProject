const express = require("express");
const { ModelUserCartData } = require("../models/User_Cart_Data.models");
const UserCartData = express.Router();

// Model import for adding user

UserCartData.post("/Post", async (req, res) => {

    const { UserId, UserCartData }= req.body

    try {

        let User_Details = await ModelUserCartData.find({ UserId });
        if(User_Details.length > 0){
          
            User_Details = User_Details[0]
            let newdata = req.body.UserCartData[0]
            User_Details.UserCartData.push(newdata)

            const { UserId , UserCartData } = User_Details
            console.log(UserCartData, "ooooooo")
            // await ModelUserCartData.updateOne(User_Details)
            const cart = await ModelUserCartData.updateOne({UserId},{$push:{UserCartData:newdata}})

            res.status(200).send({ msg: "Product Is Added in Cart", status: "success" });

        }else{
            
            let User_Data = new ModelUserCartData(req.body);
            User_Data.save();
            res.status(200).send({ msg: "Product Is Added", status: "success" });
        }


   
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});


UserCartData.get("/", async (req, res) => {

  try {
    let UserCartData = await ModelUserCartData.find()
    res.send(UserCartData)
  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});

module.exports = { UserCartData };
