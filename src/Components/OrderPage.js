import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const food = [
    {
      "name": "Chicken Whopper",
      "cost": 199,
      "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xbcxtblwjmlj36kqkzjo",
      "quantity": 1
    },
    {
      "name": "Crispy Veg Double Patty Burger",
      "cost": 199,
      "img": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/slf6cyeqaixjqih3tm9j",
      "quantity": 1
    },
    {
      "name": "Veg Whopper",
      "cost": 170,
      "img": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sgnlylsa7gqijo2qydq3",
      "quantity": 1
    },
    {
      "name": "Paneer Royale Burger",
      "cost": 200,
      "img": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wr3o7gmsgcuf1x4zwcax",
      "quantity": 1
    },
    {
      "name": "Veg Double Patty + Veg Double Patty",
      "cost": 198,
      "img": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/phm3t2g7v0lpczvtu6g7",
      "quantity": 2
    },
    {
      "name": "Fire Me Up",
      "cost": 175,
      "img": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/424358cb32c40669f3aab9ba92d27141",
      "quantity": 1
    }
  ]
  let sum = 0
export default function OrderPage() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user'))
            console.log('hey')
        else
            navigate('/')
    })
  return (
    < >
     <div className=' about-container displayFlex '>
            <div className='about-div border displayFlex bg-dark text-white' id='about-div' >
           <div className='displayFlex my-4 '>  <h3 className=''>Order History</h3></div>
           <div className='about-content fonts '>
           {food.map((e)=>{
            sum= sum + e.cost
            return <h6>{e.name} x {e.quantity}</h6>
           })}
           <h6 className='border-top'>Order total : {sum}</h6>
            <h4 className='text-center'>⚠️ Disclaimer ⚠️</h4>
            <h6 className='text-center'> The content provided here is intended for educational and informational purposes only.</h6>
            <h5 className='text-center  my-3'>Made with ❤️ by me</h5>
            </div>
            </div>
      </div>
    </>
  )
}
