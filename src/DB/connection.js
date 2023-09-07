const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log("connected")).catch(error => console.log(error))

module.exports = mongoose;