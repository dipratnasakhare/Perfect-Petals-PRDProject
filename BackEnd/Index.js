
const express = require("express")
const { connect } = require("./config/db")
const cors = require("cors");

// Routes here 
const { UserAuthRoutes } = require("./Routes/UserAuth.Routes")
const { ValentineFlower } = require("./Routes/ValentineFlower.Routes")
const app = express()
app.use(cors())


app.use(express.json());
app.use("/valentine_flower",ValentineFlower)











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