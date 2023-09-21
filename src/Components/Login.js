import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const myToast = (e)=>{
   
   toast("Hey, you can see this site without logging in!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    e.preventDefault()
  }
  return (
    <>
      <div className="container body displayFlex"style={{overflowY:"hidden",height:"80vh",width:"100vw"}}>
      <div className="page  container displayFlex w-100">
        <div id='signBox' className="displayFlex signBox "> 
          <div className='my-3'><h2 className='fonts'>DishDash<i className="fa-solid fa-truck-fast fa-xl"></i></h2></div>
          <form id='signPage' className='signPage'>
          <div className="mb-3 border ">
           
            <input type="email" className="form-control border-0" placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 border">
           
            <input type='password' className="form-control border-0" placeholder='Password' id="exampleInputPassword1" minLength='8'/>
         </div>
        
          <div className="my-2" style={{display:"flex"}}> 
            <button  className="btn btn-primary  btn-warning " onClick={myToast} >Login</button>
            <div  style={{fontSize:"13px"}}  onClick={myToast}>  <Link to='' className='nav-link my-2 mx-5'>Don't have an Account!?</Link> </div>
          </div>
        
            </form>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}
