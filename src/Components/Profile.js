import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    
    const [data,setData] = useState({})
    const navigate = useNavigate()
    const aboutUser = async() =>{
        const id = localStorage.getItem('user')
        const response = await fetch(`http://localhost:5000/user/aboutUser?id=${id}`)
        const json = await response.json()
        setData(json)
        console.log(data)
    }
    useEffect(()=>{
        if(localStorage.getItem('user'))
            aboutUser()
        else
        navigate('/')
    },[])
  return (
    <>
     
     <div className=' about-container displayFlex '>
            <div className='about-div border displayFlex bg-dark text-white' id='about-div' >
           <div className='displayFlex my-4 '>  <h3 className=''>{data.name}'s Profile</h3></div>
           <div className='about-content  '>
           <label htmlFor="name">Name</label>
            <h6  className='border-bottom'>{data.name}</h6>
            <br />
            <label htmlFor="phone">Phone Number*</label>
            <h6 className='border-bottom'>+91 {data.phone}</h6>
            <br />
            <label htmlFor="phone">Email*</label>
            <h6 className='border-bottom'>{data.email}</h6>
            <br />
            <label htmlFor="password">Joined at </label>
            <h6 className='border-bottom'>{data.date}</h6>
            <h4 className='text-center'>⚠️ Disclaimer ⚠️</h4>
            <h6 className='text-center'> The content provided here is intended for educational and informational purposes only.</h6>
            <h5 className='text-center  my-3'>Made with ❤️ by me</h5>
            </div>
            </div>
      </div>
    
    </>
  )
}
