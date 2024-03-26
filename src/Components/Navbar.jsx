import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Link to="/home" className="navbar-brand">Home</Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/todo" className="nav-link">Todo</Link>
        </li>
        <li className="nav-item">
          <Link to="/charts" className="nav-link">Charts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
