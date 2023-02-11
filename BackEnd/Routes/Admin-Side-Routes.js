const express = require("express");
const { ModelUserAuth } = require("../models/UserAuth.Models");
const { ModelOrderDetails } = require("../models/UserOrderDetails");
const AdminSideRoutes = express.Router();

  // jwt import for geting unic token

AdminSideRoutes.get("/users", async (req, res) => {
  const { page = 1, limit = 8 } = req.query;

    try {
        let All_User = await ModelUserAuth.find({user_type:"Client"});
        res.status(200).send({count: All_User.length});
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: "something went wrong Please try again", err , status:"error"})
    }

})


AdminSideRoutes.post("/OrderPost", async (req, res) => {
    const { UserId }= req.body

    console.log(req.body)
    try {
        let User_Details = await ModelOrderDetails.find({ UserId });
        if(User_Details.length > 0){
          
            User_Arr = User_Details[0].OrderDetails
            let newdata = req.body.OrderDetails[0]
            
            for(let i = 0; i < User_Arr.length; i++){
              if(`${User_Arr[i]["_id"]}` == newdata["_id"]){
                res.status(200).send({ msg: "Product Is Added Already", status: "error" });
                return 
              }
            }
             await ModelOrderDetails.updateOne({UserId},{$push:{OrderDetails:newdata}})
            res.status(200).send({ msg: "Product Is Added in Cart", status: "success" });

        }else{
            
            let User_Data = new ModelOrderDetails(req.body);
            User_Data.save();
            res.status(200).send({ msg: "Product Is Added", status: "success" });
        }

  } catch (err) {
    console.log(err, "err line 20");
    res.status(200).send({ msg: err, status: "error" });
  }
});



AdminSideRoutes.get("/OrderGet", async (req, res) => {
  try {
    let data  = await ModelOrderDetails.find()
res.send({orderList:data })
} catch (err) {
  console.log(err, "err line 20");
  res.status(200).send({ msg: err, status: "error" });
}
});



module.exports = { AdminSideRoutes }