import {useContext,useEffect,useState} from 'react'
import AppContext from '../Context/AppContext'
import ResDisplay from './ResDisplay';
import CarouselImg from './CarouselImg';
import '../CSS/Home.css'
import HashLoader from "react-spinners/HashLoader";
export default function Home() {
  const [loading,setLoading] = useState(false)
  const [rec,setRec] = useState(false)
  const [searchValue,setSearchValue]=useState("")
  const [vegActive,setVegActive] = useState(false)
  const [ratingFilter,setRatingFilter] = useState(false)
  const [defaultList,setDefaultList] = useState([])
  const context = useContext(AppContext);//Context
  const {resList,displayRes,cart,setResList} = context;
  let newList = []
  const sortByVeg = () =>{
    if(!vegActive){    
     newList = resList.filter((e)=>
      e.veg === true
     )
     setResList(newList)
     setVegActive(true)
    }
    else{
      setResList(defaultList)
     setVegActive(false)
    }

  }

  const filterByRating=()=>{
    if(!ratingFilter){
      newList = resList.filter((e)=>e.rating>4.0)
      setResList(newList)
      setRatingFilter(true)
    }
    else{
      setResList(defaultList)
     setRatingFilter(false)
    }

  }
  const Reset = () =>{
    setResList(defaultList)
    setVegActive(false)
    setRec(false)
    setRatingFilter(false)
  }
  useEffect(()=>{   
    setLoading(true)
    displayRes();
    localStorage.setItem("cart",JSON.stringify(cart))
    setDefaultList(resList)
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
      <div className='filter-div displayFlex my-3' >
      <input type="text" name='search' placeholder="Search 'North Indian'"  className="form-control w-50  searchBar" autoComplete='off' id="exampleInputEmail1" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
        <button  className='btn btn-outline-secondary filterButton' onClick={sortByVeg} >Pure Veg  {vegActive?<i class="fa-solid fa-xmark"></i>:<></>}</button>
        <button className='btn btn-outline-secondary mx-2 filterButton' onClick={filterByRating}>Rating 4.0+ {ratingFilter?<i class="fa-solid fa-xmark"></i>:<></>}</button>
{ vegActive || ratingFilter || rec? <button className='btn btn-outline-secondary' onClick={Reset}>Reset</button>: <></> }
      </div>
      <div className=' homeDiv'>
    {resList.filter((item)=>{
      return searchValue.toLowerCase() ==="" ? item : (item.name.toLowerCase().includes(searchValue) || item.avg.toLowerCase().includes(searchValue.toLowerCase()))
    }).map((e)=>{
      return  (<ResDisplay cost={e.avg} key={e.resId} id={e.resId} name = {e.name} img={e.imgUrl} rating={e.rating} veg={e.veg}/>)
    })}
    </div>
    </div>  
}
    </div>
  )
}

