import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    email:'',
    password:'',
    Cpassword:'',
    phone:'',
    name:''
  })
  const onClick = async (e) =>{
    e.preventDefault()
    
    if(form.email===''||form.password===''||form.phone===""||form.Cpassword==="")
      return myToast("Hey don't leave it blank")
    if(form.Cpassword!==form.password)
      return myToast("Passwords don't match")
    try{
    const data = await fetch('http://localhost:5000/user/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ email:form.email, password:form.password,phone:Number(form.phone),name:form.name.charAt(0).toUpperCase() + form.name.slice(1,form.name.length) }),
      })
      const user = await data.json()
      console.log(user)
      if(user.success){
        myToast('Created')
        localStorage.setItem('user',user.id)
        navigate('/')
      }
      else if(user.success===false)
        myToast(user.message)
    }catch{
        myToast("Error in creating an account")
      }

  }
  const onChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setForm({...form,[name]:value})
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
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    
    <div className="container body displayFlex"style={{overflowY:"hidden",height:"80vh"}}>
       {loading ?<ClipLoader
        color={'#F37A24'}
        loading={loading}
        size={30}
      />: 
      <div className="page  container displayFlex">
        <div className="displayFlex border" style={{justifyContent:"flex-start",height:'auto'}}> 
          <div className='my-5'><h2>DishDash<i className="fa-solid fa-truck-fast fa-xl"></i></h2></div>
          <form className='signPage my-3' onSubmit={onClick}>
          <div className="my-3 mx-4 ">
            
            <input type="email" className="form-control " name='email' value={form.email} placeholder='Email address' onChange={onChange}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="my-3 mx-4 ">
           
            <input type="name" className="form-control " name='name' value={form.name} placeholder='Name' onChange={onChange}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="my-3 mx-4">
            <input type="password" className="form-control" placeholder='Password' value={form.password} name='password' onChange={onChange} id="exampleInputPassword1" minLength='8'/>
         </div>
          <div className="my-3 mx-4">
            <input type="password" name='Cpassword' className="form-control" value={form.Cpassword} placeholder='Confirm Password' onChange={onChange} id="exampleInputPassword1" minLength='8'/>
         </div>
          <div className="my-3 mx-4">
            <input type="tel" className="form-control" placeholder='Phone Number' value={form.phone} name='phone' onChange={onChange} id="exampleInputPassword1" maxLength='10'/>
         </div>
         <button type="submit" className="btn btn-primary mx-4  btn-warning">SignUp</button>
            </form>
        </div>
      </div>
}
<ToastContainer/>
    </div>
  )
}
