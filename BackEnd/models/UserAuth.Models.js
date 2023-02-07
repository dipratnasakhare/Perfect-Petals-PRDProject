
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email:{type:String, require:true},
    password:{type:String, require:true},
    first_name:{type:String, require:true},
    mobile_no:{type:Number,require:true},
    last_name:{type:String, require:false},
    user_type:{type:String, require:false},
    UserId:{type:String, require:true},
})

const ModelUserAuth= mongoose.model("UserDatabase", UserSchema)

module.exports = { ModelUserAuth }