import React from 'react'
import "./components.css"
import { SiBigcommerce } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="navbar"> <h1><SiBigcommerce />Basket</h1>
        <ul className="navbarlist">
<li className="navbar-item"> <a href="#">Home</a></li>
<li className="navbar-item"><a href="#">Latest Products</a></li>
<li className="navbar-item"><a href="#">About</a></li>
<li className="navbar-item"><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-act"><button className="login-btn">Log-in</button>
        <h1><FaCartShopping /></h1></div>
        
    </nav>
  )
}

export default Navbar
