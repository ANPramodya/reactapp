import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {

    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
      <>
      <h1>Welcome to Weather App</h1>
      <h2>Please login</h2>
      <button onClick={()=> loginWithRedirect()}>LogIn</button>
      </>
    
    )
  )
}

export default LoginButton