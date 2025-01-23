import React from 'react'
import "./landing.css"
import Navbar from '../../components/Navbar'
import Hero from '../../modal/Hero/hero'
import Latest_products from '../../modal/latest_products/latest_products'
import Footer from '../../components/Footer'
function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Latest_products />
      <Footer />
    </div>
  )
}

export default Landing
