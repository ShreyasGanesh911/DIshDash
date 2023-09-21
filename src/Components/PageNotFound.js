import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
     <div className=' displayFlex' style={{width:"1200px",height:"60vh"}}>
        <div  style={{fontSize:"75px"}}><i className="fa-solid fa-road-barrier"></i></div>
        <h1>404</h1>
        <h3>Looks like this page doesn't exist</h3>
        <hr />
        <button type="button" className="btn btn-secondary btn-lg"><Link className="nav-link" to="/">Go Back!</Link></button>
     </div>
    </>
  )
}
