import React, { useEffect, useState } from 'react'

import ClipLoader from "react-spinners/ClipLoader";

export default function Signup() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    
    <div className="container body displayFlex"style={{overflowY:"hidden",height:"80vh"}}>
       {loading ?<ClipLoader
        color={'#F37A24'}
        loading={loading}
        size={30}
      />: 
      <div className="page  container displayFlex">
        <div className="displayFlex border" style={{justifyContent:"flex-start"}}> 
          <div className='my-5'><h2>DishDash<i className="fa-solid fa-truck-fast fa-xl"></i></h2></div>
          <form className='signPage'>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control " placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" minLength='8'/>
         </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder='Confirm Password' id="exampleInputPassword1" minLength='8'/>
         </div>
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder='Phone Number' id="exampleInputPassword1" maxLength='10'/>
         </div>
         <button type="submit" className="btn btn-primary mx-3  btn-warning">SignUp</button>
            </form>
        </div>
      </div>
}
    </div>
  )
}
