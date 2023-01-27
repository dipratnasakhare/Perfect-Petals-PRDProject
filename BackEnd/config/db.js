
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)

connect = mongoose.connect("mongodb+srv://dipratnasakhare:dipratnasakhare@cluster0.tpfba.mongodb.net/StyleCapsuleApp?retryWrites=true&w=majority")

module.exports = { connect }