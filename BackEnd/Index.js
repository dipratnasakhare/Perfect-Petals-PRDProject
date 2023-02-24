
const express = require("express")
const { connect } = require("./config/db")
const cors = require("cors");
require('dotenv').config();

// Routes here 
const { UserAuthRoutes } = require("./Routes/UserAuth.Routes")
const { UserCartData } = require("./Routes/UserCartData.Routes");
const { UserWishlist } = require("./Routes/UserWishlist.Routes");
const { AdminSideRoutes } = require("./Routes/Admin-Side-Routes");
const { FlowersData } = require("./Routes/FlowersData");

const app = express()
app.use(cors())

app.use(express.json());

app.use("/flower-data", FlowersData)


// user data routes here
app.use("/User_Cart_Data", UserCartData)
app.use("/User_Wishlist_Data", UserWishlist)

// user authentication routes and admin also 
app.use("/user",UserAuthRoutes)

// admin dashboard routes 
app.use("/AdminSideRoutes", AdminSideRoutes)


app.get("/", (req, res) => {
    res.send("Welcome To Backend")
})

app.listen(process.env.MONGOOSE_PORT_SERVER, async ()=> {
  try{
      await connect
      console.log("Connected to db")
      console.log({msg:"Your server is running at 4000 port"})
  }catch(err){
      console.log("Connection failed to db")
      console.log(err)
  }
})