import {useContext,useEffect,useState} from 'react'
import AppContext from '../Context/AppContext'
import ResDisplay from './ResDisplay';
import CarouselImg from './CarouselImg';
import '../CSS/Home.css'
import HashLoader from "react-spinners/HashLoader";
export default function Home() {
  const [loading,setLoading] = useState(false)
  const context = useContext(AppContext);//Context
  const {resList,displayRes,cart} = context;
  useEffect(()=>{   
    setLoading(true)
    displayRes();
    localStorage.setItem("cart",JSON.stringify(cart))
    setTimeout(()=>{
      setLoading(false)
    },1200)
    
  },[])
  return (
    <div className='displayFlex bg-body-tertiary my-5' style={{minHeight:"90vh"}}>
      { loading ?<div></div>:<CarouselImg/> }
    { loading ?<HashLoader
        color={'#F37A24'}
        loading={loading}
        size={80}
      />:
      
    <div style={{width:"100vw"}} className='displayFlex my-5'>
      <div className=' homeDiv'>
    {resList.map((e)=>{
      return  (<ResDisplay cost={e.avg} key={e.resId} id={e.resId} name = {e.name} img={e.imgUrl} rating={e.rating} veg={e.veg}/>)
    })}
    </div>
    </div>
}
    </div>
  )
}

