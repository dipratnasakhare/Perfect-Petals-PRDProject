
const express = require("express")
const { connect } = require("./config/db")
const cors = require("cors");
require('dotenv').config();

// Routes here 
const { UserAuthRoutes } = require("./Routes/UserAuth.Routes")
const { ValentineDay } = require("./Routes/Valentine-Day.Routes")
const { GiftBasketsFood } = require("./Routes/Gift-Baskets-Food.Routes");
const { LavenderGifts } = require("./Routes/Lavender-Gifts.Routes");
const { BirthdayFlowers } = require("./Routes/Birthday-Flowers.Routes");
const { UserCartData } = require("./Routes/UserCartData.Routes");
const { UserWishlist } = require("./Routes/UserWishlist.Routes");
const { AdminSideRoutes } = require("./Routes/Admin-Side-Routes");

const app = express()
app.use(cors())


app.use(express.json());
app.use("/valentine_Day",ValentineDay)
app.use("/Gift_Baskets_Food",GiftBasketsFood)
app.use("/Lavender_Gifts",LavenderGifts)
app.use("/Birthday_Flowers",BirthdayFlowers)

app.use("/User_Cart_Data", UserCartData)
app.use("/User_Wishlist_Data", UserWishlist)

app.use("/user",UserAuthRoutes)

app.get("/", (req, res) => {
    res.send("Welcome To Backend")
})

app.use("/AdminSideRoutes", AdminSideRoutes)







app.listen(process.env.MONGOOSE_PORT_SERVER, async ()=> {
  try{
      await connect
      console.log("connected to db")
      console.log({msg:"Your server is running at 4000 port"})
  }catch(err){
      console.log("connection failed to db")
      console.log(err)
  }
})