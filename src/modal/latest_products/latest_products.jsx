import React, { useEffect, useState } from 'react'
import './latest_products.css'
import LatestProdutsCard from '../../components/LatestProdutsCard'
import axios from "axios"
function Latest_products() {
const [data,setData]=useState([])
useEffect(()=>{
  async function servercall() {
    const response =await axios.get ("https://dummyjson.com/products") 
    console.log(response.data.products)  
    setData(response.data.products)
  }
  servercall()
},[])
  return (
     <section className="Latest-products" id='latest'>
      <div className='latest'><h1>Latest Products</h1></div>
    <div className='latestContainer'>
      {
        data.map((item,index)=>(
          <>
          {
            ((index>(data.length-7))&&(index < data.length))?
            <LatestProdutsCard item={item}/>:
            null
          }
          </>
        ))
      }
    </div>
    
  </section>
  )
}

export default Latest_products
