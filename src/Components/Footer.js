import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='bg-black footer displayFlex '>
        <div><h2 className='text-white'>DishDash<i className="fa-solid fa-truck-fast fa-xl" style={{color:"#f7f9fd"}}></i></h2></div>
        <div className="displayFlex my-4" id='footerAbout'>
          <h2><i className="fa-brands fa-x-twitter fa-xl" style={{color: "#f9fafa"}}></i></h2>
          <h2><i className="fa-brands fa-instagram fa-xl" style={{color: "#f9fafa"}}></i></h2>
          <h2><i className="fa-brands fa-pinterest fa-xl" style={{color: "#f9fafa"}}></i></h2>
         <h2><i className="fa-brands fa-facebook-f fa-xl" style={{color: "#f9fafa"}}></i></h2> 
        </div>
        <h6 className='text-white' >Made with ❤️ by me</h6>
      </footer>
    </div>
  )
}
