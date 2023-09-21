const mongoose = require('mongoose');
const menuArray = require('./Menu')
const resturantSchema = mongoose.Schema({
    resId:{
        unique:true,
		type:String,
		required:true
    },
    name:{type:String},
    rating:{type:mongoose.Types.Decimal128},
    description:{type:String},
    menu:[{item:String,cost:Number,imgUrl:String,veg:Boolean}],
    isVeg:{type:Boolean},
    category:{type:String}

}) 

const resturantList = mongoose.model('resturant',resturantSchema);
module.exports = resturantList;