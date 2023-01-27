
const express = require("express")
const { connect } = require("./config/db")

// Routes here 
const { UserAuthRoutes } = require("./Routes/ModelUserAuth.Routes")
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome To Backend")
})

app.use(express.json());

app.use("/user",UserAuthRoutes)


app.listen(4000, async ()=> {
    try{
      await connect
      console.log("Your server is running at 4000 post")
    }catch(err){
      console.log({msg:"something went wrong Please try again"})
    }
})