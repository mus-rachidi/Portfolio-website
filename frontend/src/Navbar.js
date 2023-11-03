import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.svg' 
const Navbar = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img src={logo} alt="logo" width="30" height="auto" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bold">Mustapha Rachidi</span>
        </div>
        
        <div className="">
          <NavLink to='/' className="btn btn-outline-primary link me-5">Home</NavLink>
          <NavLink to='/about' className="btn btn-outline-primary link me-5">About</NavLink>
          <NavLink to='/project' className="btn btn-outline-primary link me-5">project</NavLink>
          <NavLink to='/portfolio' className=" btn btn-outline-primary link">Portfolio</NavLink>
        </div>
          <div>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark link me-5">Dark</button>     
          </div>


        <div>
          <NavLink to='/contact' className="link">          

          <button type="button" class="btn btn-outline-primary">contact me</button>

          </NavLink>
        </div>

      </div>
  </nav>
  )
}

export default Navbar