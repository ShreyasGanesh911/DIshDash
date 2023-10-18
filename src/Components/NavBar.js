import React from 'react'
import {Link,NavLink, useNavigate} from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate()
  const logout=(e)=>{
    e.preventDefault()
    localStorage.clear('user')
    navigate('/')
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white" style={{padding:'0'}}>
  <div className="container-fluid my-3 "style={{width:"1200px"}}>
    <Link className="navbar-brand" to="/" ><h3 className=''>DishDash<i className="fa-solid fa-truck-fast fa-xl mx-2"></i></h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{flexDirection:"row-reverse"}}>
      <ul className="navbar-nav" >
        <li className="nav-item mx-3">
          <NavLink className="nav-link "  to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link "  to="/about">About</NavLink>
        </li>
        <li className="nav-item mx-3">
          {localStorage.getItem('user')?
           <div class="dropdown">
          <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-regular fa-user"></i> Account
  </a>

  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to='/profile'>Profile</Link></li>
    <li><Link class="dropdown-item" to="/orders">Orders</Link></li>
    <li><button class="dropdown-item" onClick={logout}>Logout</button></li>
  </ul>
</div>:<NavLink className="nav-link" to="/login"><i className="fa-regular fa-user "></i> Login</NavLink>}
        </li>
        <li className="nav-item mx-3 ">
          <NavLink className="nav-link "  to="/cart"><i className="fa-solid fa-cart-shopping "></i> Cart</NavLink>
        </li>
       
        
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
