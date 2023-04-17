import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {

  const { logout  } = useAuth0();
  
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center align-items-center mt-5'>
      <button className='' onClick={() => logout ()}>Log Out</button>
      </div>
      </div>
    </>
  )
}
