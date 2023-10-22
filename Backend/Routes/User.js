const express = require('express')
const router = express.Router();
const User = require('../Schema/UserSchema')
const resturant = require("../Schema/CartSchema")
const ResturantMod = require("../Schema/ResturantSchema")
const resName = require('../Schema/ResName')
const Auth = require('../MiddleWare/Authentication')
const Cdate = new Date()
        //userLogin
router.post("/login",async(req,res)=>{
    const user = req.body;
    try{
        const find = await User.findOne({email:user.email})
        if(find==null){
            res.json({
                success:false,
                message:"User doesn't exists try another account!"
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

router.post("/signup",async(req,res)=>{
    const {email,password,phone,name} = req.body;
    try{
        const find = await User.findOne({email:email})
        const find2 = await User.findOne({phone:phone})

        if(find || find2){
            if(find)
                return res.json({success:false,message:"Email address is already used, try another one"})
            else
                return res.json({success:false,message:"Looks like this phone number is already used"})
        }
        else{
            const user = await User.create({
                email:email,
                phone:phone,
                password:password,
                date:String(Cdate.getDate()) +"/"+String(Cdate.getMonth())+"/"+String(Cdate.getFullYear()),
                name:name
            })
            res.status(200).json({
                success:true,
                message:'user created',
                id: user._id
            })
        }
        
        console.log('hello there done with the code')
    }catch(e){
        res.json(e)
    }
    
})
router.get('/aboutUser',async(req,res)=>{
    
    try{
        const {id} = req.query
    let user = await User.findById(id)
    //console.log(user)
    if(user===null){
        return res.status(500).json({success:false,message:"User not found"})
    }
    const {email,phone,date,name} = user
    res.status(200).json({email:email,phone:phone,date:date,name:name})
    }catch(e){
        res.json({success:false,e})
    }
})
        // Menu
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