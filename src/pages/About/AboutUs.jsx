import React from 'react'
import "./AboutUs.css"
import Navbar from '../../components/Navbar'
import { SiBigcommerce } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
function AboutUs() {
  return (
    <div>
      <Navbar/>
      <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to Basket, your one-stop shop for all your daily needs. We're a team of passionate individuals who are dedicated to providing the best online shopping experience possible.</p>
      <div className="about-us-content">
        <div className="about-us-image">
         <h1><SiBigcommerce />Basket</h1>
        </div>
        <div className="about-us-text">
          <h2>Our Mission</h2>
          <p>At Basket, our mission is to make online shopping easy, convenient, and fun. We believe in providing the highest quality products at affordable prices, with exceptional customer service.</p>
          <h2>Our Values</h2>
          <ul>
            <li>Customer satisfaction is our top priority</li>
            <li>We strive for excellence in everything we do</li>
            <li>We believe in being honest, transparent, and fair</li>
          </ul>
        </div>
      </div>
      <div className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="emp1.webp" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="emp2.webp" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Marketing Manager</p>  <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="emp3.webp" alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default AboutUs
