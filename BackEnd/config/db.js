
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)


const url = "mongodb+srv://dipratnasakhare:dipratnasakhare@cluster0.tpfba.mongodb.net/StyleCapsule?retryWrites=true&w=majority"

const url2 = "mongodb://dipratnasakhare:dipratnasakhare@cluster0-shard-00-00.tpfba.mongodb.net:27017,cluster0-shard-00-01.tpfba.mongodb.net:27017,cluster0-shard-00-02.tpfba.mongodb.net:27017/StyleCapsuleApp?ssl=true&replicaSet=atlas-kb0fad-shard-0&authSource=admin&retryWrites=true&w=majority"
connect = mongoose.connect(url2)

module.exports = { connect }