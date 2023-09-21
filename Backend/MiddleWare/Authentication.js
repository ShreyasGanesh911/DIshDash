const User = require('../Schema/UserSchema')
const express = require('express')
const Auth = async(req,res,next) =>{
    try{
        const token = req.header('user');
            if(!token){
                 res.status(401).json({sucess:false,message:"need to login"})
                }
            else{
                try{
                const authToken = User.findById(token);
                if(!authToken){
                    res.status(401).json({success:false,message:"need to login"})
                }
                else{
                    data=token
                    next()
                }
                }catch(e){
                    console.log(e)
                }
            }
    }catch(e){
        console.log(e)
    }
}
module.exports = Auth