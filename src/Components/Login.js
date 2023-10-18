import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const navigate = useNavigate()
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const handleForm=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setForm({...form,[name]:value})
  }
  const sumbitForm=async(e)=>{
    e.preventDefault()
    if(form.email==='' || form.password==='')
      return myToast("Hey there don't leave it blank")
    try{ const response = await fetch(`http://localhost:5000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ email:form.email, password:form.password }),
        });
        const json = await response.json();
        if(json.success){
            navigate('/')
            localStorage.setItem('user',json.user)
        }
        else{
          myToast(json.message)
        }
  } catch(e){
    myToast(e)
  }
}
  const myToast = (message)=>{
   
   toast(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    
  }
  return (
    <>
      <div className="container body displayFlex"style={{overflowY:"hidden",height:"80vh",width:"100vw"}}>
      <div className="page  container displayFlex w-100">
        <div id='signBox' className="displayFlex signBox "> 
          <div className='my-3'><h2 className='fonts'>DishDash<i className="fa-solid fa-truck-fast fa-xl"></i></h2></div>

          <form id='signPage' className='signPage'>
          <div className="mb-3 border ">
           
            <input type="email" className="form-control border-0" onChange={handleForm} placeholder='Email address' name="email" value={form.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 border">
           
            <input type='password' name="password" className="form-control border-0" onChange={handleForm} placeholder='Password' value={form.password} id="exampleInputPassword1" minLength='8'/>
         </div>
        
          <div className="my-2" style={{display:"flex"}}> 
            <button  className="btn btn-primary  btn-warning " onClick={sumbitForm} >Login</button>
            <div  style={{fontSize:"13px"}}  >  <Link to='/signup' className='nav-link my-2 mx-5'>Don't have an Account!?</Link> </div>
          </div>
        
            </form>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}
