
const express = require("express")
const { connect } = require("./config/db")
const cors = require("cors");
require('dotenv').config();

// Routes here 
const { UserAuthRoutes } = require("./Routes/UserAuth.Routes")
const { ValentineDay } = require("./Routes/Valentine-Day.Routes")
const { GiftBasketsFood } = require("./Routes/Gift-Baskets-Food.Routes");
const { LavenderGifts } = require("./Routes/lavender-gifts.Routes");
const { BirthdayFlowers } = require("./Routes/Birthday-Flowers.Routes");
const { UserCartData } = require("./Routes/User_Cart_Data.Routes");


const app = express()
app.use(cors())


app.use(express.json());
app.use("/valentine_Day",ValentineDay)
app.use("/Gift_Baskets_Food",GiftBasketsFood)
app.use("/Lavender_Gifts",LavenderGifts)
app.use("/Birthday_Flowers",BirthdayFlowers)

app.use("/User_Cart_Data", UserCartData)
// app.use("/Lilies",Lilies)
// app.use("/Gardenia_Plants",GardeniaPlants)
// app.use("/Alstroemeria",Alstroemeria)
// app.use("/Exotic",Exotic)
// app.use("/Sweet_Flower",SweetFlower)
// app.use("/Blue",Blue)
// app.use("/Green",Green)
// app.use("/Red",Red)
// app.use("/Purple",Purple)
// app.use("/Bright",Bright)















app.get("/", (req, res) => {
    res.send("Welcome To Backend")
})
app.use(express.json());
app.use("/user",UserAuthRoutes)


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