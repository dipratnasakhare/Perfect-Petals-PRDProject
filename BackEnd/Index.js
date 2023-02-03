
const express = require("express")
const { connect } = require("./config/db")
const cors = require("cors");

// Routes here 
const { UserAuthRoutes } = require("./Routes/UserAuth.Routes")
const { ValentineDay } = require("./Routes/Valentine-Day.Routes")
const { GiftBasketsFood } = require("./Routes/Gift-Baskets-Food.Routes");
const { sunflowers } = require("./Routes/Sunflowers.Routes");
const { LavenderGifts } = require("./Routes/lavender-gifts.Routes");
const { Lilies } = require("./Routes/Lilies.Routes");
const { GardeniaPlants } = require("./Routes/Gardenia-Plants.Routes");
const { Alstroemeria } = require("./Routes/Alstroemeria.Routes");
const { Exotic } = require("./Routes/Exotic.Routes");
const { SweetFlower } = require("./Routes/SweetFlowers.Routes");
const { BirthdayFlowers } = require("./Routes/Birthday-Flowers.Routes");
const { Blue } = require("./Routes/Blue.Routes");
const { Green } = require("./Routes/Green.Routes");
const { Red } = require("./Routes/Red.Routes");
const { Purple } = require("./Routes/Purple.Routes");
const { Bright } = require("./Routes/Bright.Routes");

const app = express()
app.use(cors())


app.use(express.json());
app.use("/valentine_Day",ValentineDay)
app.use("/Gift_Baskets_Food",GiftBasketsFood)
app.use("/Sunflowers",sunflowers)
app.use("/Lavender_Gifts",LavenderGifts)
app.use("/Lilies",Lilies)
app.use("/Gardenia_Plants",GardeniaPlants)
app.use("/Alstroemeria",Alstroemeria)
app.use("/Exotic",Exotic)
app.use("/Sweet_Flower",SweetFlower)
app.use("/Birthday_Flowers",BirthdayFlowers)
app.use("/Blue",Blue)
app.use("/Green",Green)
app.use("/Red",Red)
app.use("/Purple",Purple)
app.use("/Bright",Bright)















app.get("/", (req, res) => {
    res.send("Welcome To Backend")
})
app.use(express.json());
app.use("/user",UserAuthRoutes)


app.listen(4000, async ()=> {
  try{
      await connect
      console.log("connected to db")
      console.log({msg:"Your server is running at 4000 port"})
  }catch(err){
      console.log("connection failed to db")
      console.log(err)
  }
})