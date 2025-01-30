import React from 'react'
import "./signup.css"
const Signup =({setAuthType}) => {
  return (
    <form>
      <h1 className='heading'>SIGNUP</h1>
      <div className='conatiner1'>
      <label htmlFor="Name" className='labels1'>
        <p className='title' style={{color: 'blue'}}>Name </p>
        <input type="name" id='name' className='inputs' placeholder='sofiya' />
      </label>
      <label className='labels' htmlFor="email" style={{color: 'blue'}}>
        <p className='title'>Email: </p>
        <input type="text" name="" id="" />
        <input type="password" id='password' className='inputs' placeholder='' />
      </label> <br />
      <button type='submit' className='btn'>Login</button>
      <p className='header'>Don't have a acount? <a onClick={()=>{setAuthType('sigin')}}>Signin</a></p> </div>
    </form>
  )
}

export default Signup
