const mongoose = require("mongoose");
require('dotenv').config()
const connectDB=()=>{
mongoose.connect(process.env.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>console.log("connection to database succeeded")).
catch(err=>console.log("failed to connect to database"));
}
module.exports=connectDB