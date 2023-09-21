import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom'

export default function ResDisplay(props) {
  /*
    Here state={{id:props.id,name:props.name,rating:props.rating,des:props.cost,img:props.img}} is used to pass props to another component 
  */
  return (
    <>
   <motion.div style={{display:"flex"}} className='my-4 '  >
      <motion.div className="card mx-5  hover-zoom " whileHover={{scale:1.1}} style={{width: "250px", height:"300px",border:"None"}} >
      <Link to='/menu' className='link text-dark' state={{id:props.id,name:props.name,rating:props.rating,des:props.cost,img:props.img}}> 
  <img src={props.img} style={{width:"100%",height:"177px",overflow:"hidden",objectFit:"contain"}} className="card-img-top hover-zoom" alt=""/>
  <div className="card-body ">
    <div className='titleDisplay' >
    <h6 className="card-title overFlow nameDisplay  " >{props.name}</h6>
    </div>
    <div className='ratingDisplay Fonts border text-white'><i className="fa-regular fa-star" style={{color: "#ffffff"}}></i>  {props.rating}</div>
    <div className='discription '>{props.cost}</div>
  </div>
  </Link>
</motion.div>
    </motion.div> 
    </>
  )
}
