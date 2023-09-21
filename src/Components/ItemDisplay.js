import {useContext,useEffect} from 'react'
import AppContext from '../Context/AppContext'
import { useLocation } from 'react-router-dom';
import MenuList from './MenuList';

import { motion } from 'framer-motion';
import '../CSS/Menu.css'
import PageNotFound from './PageNotFound';
export default function ItemDisplay() {
  const context = useContext(AppContext);

  const {list,resturantList} = context;
  const location = useLocation() //Passing props from other component through Link

  useEffect(()=>{
    resturantList(location.state.id)
  })
  return (
    <div className='displayFlex  bg-body-tertiary my-5'style={{width:"100vw"}}>
      <div className='h-25'></div>
      <  motion.div id='resNameDisplay' className="card  mb-3  bg-dark my-5 resNameDisplay" animate={{scale:1}} initial={{scale:0.9}} >
  <div className="card-body resNameDisplayContent" id='resNameDisplayContent' >
    <h3 className="card-title text-white Fonts">{location.state.name}</h3>
    <p className="card-text text-white Fonts">{location.state.des}</p>
    <p className="card-text text-white Fonts"><i className="fa-solid fa-star Fonts" ></i> {location.state.rating}</p>
    <p className="card-text text-white Fonts">1k+ ratings</p>
    
  </div>
  <div className=' displayFlex resNameDisplayImg' id='resNameDisplayImg' >
  <img src={location.state.img}  style={{width:'190px',height:'132px'}}   className="card-img-top" alt="..."></img>
  
    </div>
</motion.div>
        <div className='container-div' id='container-div'>
        {
        (Object.keys(list).length === 0)?
        <PageNotFound/>:list.map((e)=>{
          return(<MenuList name={e.item} key={e._id} id={e._id} cost={e.cost} veg={e.veg} img={e.imgUrl}/>)
        })}
        </div>
    </div>
  )
}
