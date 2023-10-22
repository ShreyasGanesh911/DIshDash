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
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String
        
    }
})

const User = mongoose.model('practice/user/login',userSchema)
module.exports = User