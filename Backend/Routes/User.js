const express = require('express')
const router = express.Router();
const User = require('../Schema/UserSchema')
const resturant = require("../Schema/CartSchema")
const ResturantMod = require("../Schema/ResturantSchema")
const resName = require('../Schema/ResName')
const Auth = require('../MiddleWare/Authentication')
        //userLogin
router.post("/login",async(req,res)=>{
    const user = req.body;
    try{
        const find = await User.findOne({email:user.email})
        if(find==null){
            res.json({
                success:false,
                message:"User doesnt exists try another account!"
            })
        }
        else{
            if(find.password===user.password){
                res.setHeader('user',find._id)
                res.status(200).json({success:true,email:user.email,message:"Logged in",user:find._id})
            }
            else{
                res.json({
                    success:false,
                    message:"Incorrect Password"
                })
            }

        }
    }catch(e){
        res.status(404).json({success:false,message:"Error in loggin"})
    }
})

    //User signUP

router.get("/signup",async(req,res)=>{
    const {email,password} = req.body;
    try{
        let find = await User.findOne({email:email})
        if(find!=null){
            res.json({
                success:false,
                message:"User exists try another account!",
                accout:find
            })
        }
        else{
            await User.create({
                email:email,
                password:password
            })
            res.json({
                success:true,
                email:email
        
            })
        }
    }catch(e){
        console.log(e)
    }
    
})
        // About user
router.get("/menu",async(req,res)=>{
    try{
        //const data = req.header('authToken')
        const data = req.query.resId
       let list= await resturant.findOne({resId:data})  
       return   res.json(list.menu)
}catch(error){
    res.status(500).json(error)
}   
        
})

router.get('/addResName',async(req,res)=>{
    const data = req.body;
    const restur = await ResturantMod.create({
        rating:data.rating,
        name:data.name,
        description:data.description,
        image:data.image,
        resId:data.resId,
        veg:data.veg
    })
    res.json(restur)
})
router.get('/createNow',async(req,res)=>{
    const data = req.body;
    const resturantcreate = await resturant.create({resId:data.resId,name:data.name,rating:data.rating,description:data.description,menu:data.menu,isVeg:data.isVeg,category:data.category})
    res.status(200).json(resturantcreate)
})
router.get('/displayRes',async(req,res)=>{
    try{
        const data = await resName.findOne({id:'listDisplay'});
        res.json(data.menu);
    }catch(error){
            console.log(error);
    }

    
})
router.get('/resName',async(req,res)=>{
    const data = req.body;
    const data2 = await resName.create({
        id:data.id,
        menu:data.list,
    })
    res.json(data2);

})
module.exports = router;