import React from 'react'
import "./Signin.css"
const Signin = ({setAuthType}) =>{
  return (
    <form>
      <h1 className='heading'>SIGNIN</h1>
      <div className='conatiner1'>
      <label htmlFor="email" className='labels1'>
        <p className='title' style={{color: 'blue'}}>Email: </p>
        <input type="email" id='email' className='inputs' placeholder='sofiya@gmail.com' />
      </label>
      <label className='labels' htmlFor="password" style={{color: 'blue'}}>
        <p className='title'>Password: </p>
        <input type="password" id='password' className='inputs' placeholder='' />
      </label> <br />
      <button type='submit' className='btn'>Login</button>
      <p className='header'>Don't have a account? <a onClick={()=>{setAuthType('signup')}}>Signup</a></p> </div>
    </form>
  )
}

export default Signin
