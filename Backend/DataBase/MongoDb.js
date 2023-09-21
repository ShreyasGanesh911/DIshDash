const mongoose = require("mongoose");
require('dotenv').config()
const id ='mongodb+srv://shreyasganesh911:Shreyas%40130013542069@cluster0.nthxx3k.mongodb.net/ '
const mongoParam={useNewUrlParser:true,useUnifiedTopology:true}
const connection = mongoose.connect(id,mongoParam).then(()=>{
    console.log("Connected to data base!")
}).catch((error)=>{
    console.log(error)
})
module.exports = connection;