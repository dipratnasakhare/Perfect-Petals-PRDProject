
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
require('dotenv').config();

connect = mongoose.connect(process.env.MONGOOSE_URL)

module.exports = { connect }