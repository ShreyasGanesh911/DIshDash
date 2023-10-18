import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user'))
            console.log()
        else
        navigate('/')
    })
  return (
    <>
     
     <div className=' about-container displayFlex '>
            <div className='about-div border displayFlex bg-dark text-white' id='about-div' >
           <div className='displayFlex my-4 '>  <h3 className=''>User Profile</h3></div>
           <div className='about-content fonts '>
           <label htmlFor="name">Name*</label>
            <h6  className='border-bottom'>Shreyas</h6>
            <br />
            <label htmlFor="phone">Phone Number*</label>
            <h6 className='border-bottom'>9945333584</h6>
            <br />
            <label htmlFor="password">Password</label>
            <h6 className='border-bottom'> 123456789</h6>
            <h4 className='text-center'>⚠️ Disclaimer ⚠️</h4>
            <h6 className='text-center'> The content provided here is intended for educational and informational purposes only.</h6>
            <h5 className='text-center  my-3'>Made with ❤️ by me</h5>
            </div>
            </div>
      </div>
    
    </>
  )
}
