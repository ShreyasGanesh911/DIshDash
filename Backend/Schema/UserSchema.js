const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        unique:true,
		type:String,
		required:true

    },
    password:{
        type:String,
		required:true
    }
})

const User = mongoose.model('practice/user/login',userSchema)
module.exports = User