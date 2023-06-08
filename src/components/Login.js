import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [credentials,setCredentials]=useState({email:"",password:""})
  let navigate = useNavigate();
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const response =await fetch('http://localhost:5000/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify({
        email:credentials.email,
        password:credentials.password
      })
    })
    const json=await response.json()
    console.log(json)
    if(json.success){
      localStorage.setItem('token',json.authToken);
      navigate('/')
      props.showAlert("Login Succesfully","success")
    }else{
      props.showAlert("Invalid LoginId/Password","danger")
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2>Login To Continue</h2>
          <label htmlFor="email" className="form-label my-2">Email address</label>
          <input type="email" className="form-control my-2" value={credentials.email} name='email' id="email" onChange={onChange} placeholder="name@example.com" />
        </div>
        <label htmlFor="password" className="form-label my-2">Password</label>
        <input type="password" name="password" id="password" value={credentials.password} className="form-control my-2" onChange={onChange} aria-labelledby="passwordHelpBlock" />
        <div id="labelpassword" className=" my-1form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <button className="btn btn-primary my-2">Login</button>
      </form>
    </div>
  )
}

export default Login