const express = require("express");
const UserAuthRoutes = express.Router();

// Model import for adding user
const { ModelUserAuth } = require("../models/UserAuth.Models")

const bcrypt = require('bcrypt');    // Bcript import for password protect

const jwt = require('jsonwebtoken');  // jwt import for geting unic token

UserAuthRoutes.get("/", async (req, res) => {

    try {
        let All_User = await ModelUserAuth.find();
        res.status(200).send(All_User);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err });
    }

})

UserAuthRoutes.post("/register", async (req, res) => {

    const UserDetails = req.body;
    const { email, password } = UserDetails
    const unic = "8723ty8723872109809][32/"
    try {
        let Single_User = await ModelUserAuth.find({ email });
        if (Single_User.length !== 0) {
            return res.status(200).send({ msg: "User already exists", status:"error" });
        } else {
            bcrypt.hash(password, 8, async (err, protected_password) => {
                if (!err) {
                    UserDetails.password = protected_password
                    const UserId = jwt.sign({email ,id:password}, unic);
                    UserDetails.UserId = UserId
                    console.log(UserDetails, "user Details here")
                    let NewUser = new ModelUserAuth(UserDetails);
                    NewUser.save();
                    res.status(200).send({ msg:"User has been created", status:"success"});
                } else {
                    console.log(err, "err line 43")
                }
            })

        }

    } catch (err) {
        console.log(err, "err line 50");
        res.status(200).send({ msg: "something went wrong Please try again", status:"error" });
    }

});



UserAuthRoutes.post("/login", async (req, res) => {

    const UserDetails = req.body;
    const { email, password } = UserDetails
    const Key = "Style_User-!`^8};^*3iu($*"

    try {
        let User_Details = await ModelUserAuth.find({ email });
        if(User_Details.length > 0){
            if(User_Details[0].type === undefined){
                bcrypt.compare(password, User_Details[0].password, async (err, result) => {
                    if (result) {   
                        const token = jwt.sign({email ,id:password}, Key);
                        console.log(User_Details, "userid")
                        res.status(200).send({msg:"User Login Successfully", UserId:User_Details[0].UserId, name:User_Details[0].first_name, token, status:"success"});
                    } else {
                        res.status(200).send({msg:"Wrong password", status:"error"})
                    }
                    if(err){
                        res.status(200).send({msg:err, status:"error"})
                    }
                })
            }else{
                bcrypt.compare(password, User_Details[0].password, async (err, result) => {
                    if (result) {    
                        const token = jwt.sign({email ,id:password}, Key);
                        res.status(200).send({msg:"Admin Login Successfully", token, status:"success"});
                    } else {
                        res.status(200).send({msg:"Wrong password", status:"error"})
                    }
                    if(err){
                        res.status(200).send({msg:err, status:"error"})
                    }
                })

            }
        }else{
            res.status(200).send({msg:"User not found", status:"error"})
        }
       
    } catch (err) {
        console.log(err, "err line 98");
        res.status(200).send({ msg: "something went wrong Please try again", err , status:"error"})
    }
});



UserAuthRoutes.post("/changepass",async(req,res)=>{

    const email = req.body.email;
    console.log(req.body)

   try {
     let User_Details = await ModelUserAuth.find({email: 'rickysakhare677@gmail.com'});

     console.log(User_Details, email)
            if(User_Details.length > 0){
                res.status(200).send({msg:"user is found", status:"success", userPresent:true});
            }else{
                res.status(200).send({msg:"user doesn't exist", status:"error", userPresent:false })
            }

    } catch (err) {
      console.log(err.message);
      res.status(200).send({msg:err, status:"error"})
    }
  });
  
UserAuthRoutes.patch("/setpass",async(req,res)=>{
    const email = req.body.email;
    const password= req.body.password

    try {
      const data = await ModelUserAuth.find({email});
      if(data.length > 0){
        bcrypt.hash(password, 8, async (err, protected_password) => {
          if (err) {
            console.log(err);
          } else {
            await ModelUserAuth.updateOne({email },{password:protected_password});
            res.status(200).send({msg: "User password has been changed successfully", status:"success"});
          }
        });
      }
    } catch (err) {
        res.send({msg:err, status:"error"})
        console.log(err);
    }

})












module.exports = { UserAuthRoutes }