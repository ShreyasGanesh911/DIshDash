import React from 'react'
import {Link} from "react-router-dom";
import '../CSS/Menu.css'
export default function EmptyCart() {
  return (
    <div className='displayFlex empty-cart-div' id='empty-cart-div' style={{width:"1200px",height:"60vh"}}>
      <div style={{fontSize:"75px"}} ><i className="fa-solid fa-xmarks-lines fa-beat-fade fa-2xl"></i></div>
      <h5 className='my-5'>Looks like you have not addded anything to your cart. Go ahead & explore!</h5>
      <button type="button" className="btn btn-secondary btn-lg"><Link className="nav-link" to="/">Order Now</Link></button>
    </div>
  )
}
