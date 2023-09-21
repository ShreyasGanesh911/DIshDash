import React from 'react'

export default function About() {
  return (
    <>
      <div className=' about-container displayFlex'>
            <div className='about-div border displayFlex bg-dark text-white' id='about-div' >
           <div className='displayFlex my-4 '>  <h3 className=''>DishDash<i className="fa-solid fa-truck-fast fa-xl"></i></h3></div>
           <div className='about-content fonts '>
            <h6  style={{textAlign: "justify",textJustify: "interWord"}}> 
            DishDash is an online food ordering platform that caters to food enthusiasts looking for a convenient and efficient way to satisfy their cravings. Built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, DishDash has been designed to be minimalist and user-friendly.
            </h6>
            <br />
            <h6>Feel free to explore my other projects!</h6>
            <br />
            <h6 style={{display:"inline-block"}}><a className='list-group-item list-group-item-action list-group-item-warning active border-bottom border-warning' rel="noreferrer" target='_blank' href="https://github.com/shreyasganesh911">GitHub/shreyasganesh911</a></h6>
            <h4 className='text-center'>⚠️ Disclaimer ⚠️</h4>
            <h6 className='text-center'> The content provided here is intended for educational and informational purposes only.</h6>
            <h5 className='text-center  my-3'>Made with ❤️ by me</h5>
            </div>
            </div>
      </div>
    </>
  )
}
