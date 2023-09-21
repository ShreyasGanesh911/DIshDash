const mongoose = require('mongoose');
const menuSchema  = mongoose.Schema({
   item:{type:String},
   cost:Number


})
const menu = mongoose.model('menuList',menuSchema);
module.exports = menu;