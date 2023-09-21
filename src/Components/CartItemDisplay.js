import { motion } from 'framer-motion'
import React, { useEffect, useState,useContext } from 'react'
import AppContext from '../Context/AppContext';
export default function CartItemDisplay(props) {
  
    const context = useContext(AppContext)
    const {cart,setCart} = context
    const [count,setCount] =useState(props.quantity)

    //Decreasing quantity
    const removeItem = ({name})=>{
      //While removing item check if it is a single item or not
      // If single -> remove from cart by using splice
        let newArray = cart;
        let i=0
        for(i=0;i<cart.length;i++){
            if(newArray[i].name===name){
                if(newArray[i].quantity===1){
                    newArray.splice(i, 1);
                }
                else
                    newArray[i].quantity=count-1                  
            }
        }
        setCart(newArray)      
       setCount(count-1)
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    //Increasing quantity
    const addItems=(item)=>{
        setCount(count+1)
        const newProduct={name:item.name,cost:item.cost};
        let i=0
        for(i=0;i<cart.length;i++){
            if(cart[i].name===newProduct.name)
                cart[i].quantity=count+1
        }
        setCart(cart)
        localStorage.setItem("cart",JSON.stringify(cart))
    }

    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem("cart")))

    },[setCount,setCart,count,cart])
  return (
    <>
      { (count!==0) && <div className='   my-2 cart-box' id='cart-box' style={{}}>
        <div className=' cart-box-content' id='cart-box-content'> 
            <div id="cart-container-name" className="fonts greyFont cart-container-name" > {props.name}</div>
            <div style={{height:"90%",width:"30%",border:"none"}}> <img style={{height:"100%",width:"100%",border:'0'}} src={props.img}alt="" /> </div>
        
        </div>
        <div id="cart-container-qty" className=' cart-container-qty greyFont Roboto '  >
        <div classNmae="qty-change" id='qty-change'>
  <ul className="pagination pagination-sm">
    <li className="page-item active" aria-current="page">
      <motion.span whileTap={{scale:1.3}} className="page-link bg-black" style={{zIndex:0}} onClick={()=>{removeItem(props)}} >-</motion.span>
    </li>
    <li className="page-item page-link">{count}</li>
    <motion.div whileTap={{scale:1.3}} onClick={()=>{addItems(props)}} style={{zIndex:0}} className="page-item  page-link bg-black active" >+</motion.div>
  </ul>
</div>             
 </div>
  <div id="cart-box-content-price" className='cart-box-content-price Roboto greyFont'  >₹ {props.totalCost}</div>
      </div>}
    </>
  )
}
