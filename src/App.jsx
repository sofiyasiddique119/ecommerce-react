import React, { useState } from 'react'
import "./userauth.css"
import Signup from '../../modal/signup/Signup'
import Signin from '../../modal/signin/Signin'
function UserAuth() {
    const[authType,setAuthType]= useState("signup")
  return (
    <div>
      {
      authType === "signup"?
      <Signup setAuthType={setAuthType}/>
      :
      <Signin setAuthType={setAuthType}/>
      
    }
    </div>
  )
}

export default UserAuth
