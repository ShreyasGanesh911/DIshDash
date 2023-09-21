const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    rating:{type:String},
    name:{type:String},
    description:{type:String},
    image:{type:String},
    resId:{type:String},
    veg:{type:Boolean}
})

const ResturantMod = mongoose.model("resDB",Schema);
module.exports = ResturantMod