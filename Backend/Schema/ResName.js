const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:String,
    menu:[{name:String,avg:String,imgUrl:String,veg:Boolean,rating:String,resId:String}],
})

const resName = mongoose.model('resNameDb',schema);
module.exports = resName;