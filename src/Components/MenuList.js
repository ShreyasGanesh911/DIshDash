import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext';
import '../CSS/Menu.css'

export default function MenuList(props) {
    const context = useContext(AppContext)
    const {cart,setCart} = context
    
    const [count,setCount] =useState(0)
    // Adding an item initally
    const addItem=async(item)=>{
        const newProduct={name:item.name,cost:item.cost,img:item.img,quantity:1};
       
        let i=0;
        let exist = false //to check if item already exists in the cart
        setCount(count+1)
        for(i=0;i<cart.length;i++){
            if(cart[i].name===newProduct.name){
                
                cart[i].quantity=count+1
                exist=true
                
            }
            
        }
        if(!exist){
            setCount(count+1)
        if(await setCart([...cart,newProduct])){       
        localStorage.setItem("cart",JSON.stringify(cart))
        
        }
    }
    }

    //Adding more than 1 item
    const addMoreItem=(item)=>{
        setCount(count+1)
        const newProduct={name:item.name,cost:item.cost};
        
        let i=0
        for(i=0;i<cart.length;i++){
            if(cart[i].name===newProduct.name)
                cart[i].quantity=count+1
        }
        localStorage.setItem("cart",JSON.stringify(cart))
        
    }
    //Removing an item
    const removeItem=(item)=>{
        setCount(count-1)
        const newProduct={name:item.name,cost:item.cost};
        let i=0
        for(i=0;i<cart.length;i++){
            if(cart[i].name===newProduct.name){
                cart[i].quantity=count-1
                if(cart[i].quantity===0){
                    cart.splice(i, 1);
                }    
            }
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart,setCart])
    
  return (
    <div className='bg-body-tertiary container-div' id='container-div'>
      <div className="card  mb-3 itemMenu " id='itemMenu'>
  <div className="card-body menu-body menu-div-body" id='menu-body' >
   
    <h6 className="card-title Fonts">{props.name}</h6>
    <p className="card-text">₹{props.cost}/-</p>
    
    {count===0 ? <motion.button whileTap={{scale:1.3}} className="btn btn-dark" onClick={()=>{addItem(props)}}  >Add</motion.button>
    :
     <div >
  <ul className="pagination pagination-sm">
    <li className="page-item active" aria-current="page">
      <motion.span whileTap={{scale:1.3}} className="page-link bg-black" onClick={()=>{removeItem(props)}}>-</motion.span>
    </li>
    <li className="page-item page-link">{count}</li>
    <motion.div whileTap={{scale:1.3}} className="page-item  page-link bg-black active" onClick={()=>{addMoreItem(props)}}>+</motion.div>
  </ul>
</div> 
  }
  </div>
  <div className=' displayFlex' style={{width:"25%",height:"100%"}}>
    <motion.img src={props.img} whileHover={{scale:1.1}} style={{width:'118px',height:'96px'}}  className="card-img-top" alt="..."></motion.img>
    </div>
</div>
    </div>
  )
}


/*
  const data = JSON.parse(localStorage.getItem('cart'));
        if (data){
          setCart(data)
          
        }
        else{
            localStorage.setItem("cart",JSON.stringify(cart))
            setCart(cart)
        }
        localStorage.setItem("cart",JSON.stringify(cart))
            setCart(cart)
*/