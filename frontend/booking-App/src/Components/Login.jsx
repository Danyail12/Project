import React, { useState } from 'react'

const Login = () => {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
  return (
    <>
    <div className="col-md-8 ms-auto  ">
        <div className="col-md-8 mt-4">


  <div class="mb-3 row">
    <label for="Email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10 col-md-6 col-lg-4">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
  </div>
        </div>
        <div className="col-md-8">

  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10 col-md-6 col-lg-4">
      <input type="password" class="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)  }/>
    </div>
  </div>
        </div>
    
    </div>
    </>
  )
}

export default Login