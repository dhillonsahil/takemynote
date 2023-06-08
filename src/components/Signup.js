import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
  
   const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
   }

   let navigate=useNavigate();

   const handleSubmit= async(e)=>{
    e.preventDefault();
    if(credentials.password===credentials.cpassword){
      const response =await fetch('http://localhost:5000/api/auth/createuser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password:credentials.password
      })
    })

    const json = await response.json();
    console.log(json)
    if(json.success){
      navigate('/')
    }else{
      alert("Signup Failed ! Try with another email")
    }
    }else{
      alert("Password and Confirm Password are different")
    }
   }
  return (
    <div>
      <form  onSubmit={handleSubmit} className='my-3' >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={credentials.name} name='name' id="name" onChange={onChange} placeholder="name@example.com" minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} name='email' id="email" onChange={onChange} placeholder="name@example.com" />
        </div>
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" id="password" value={credentials.password} className="form-control" onChange={onChange} aria-labelledby="passwordHelpBlock" minLength={8} required />
        <div id="labelpassword" className="form-text">
          Your password must be 8-20 characters long.
        </div>
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="cpassword" name="cpassword" id="cpassword" value={credentials.cpassword} className="form-control" onChange={onChange} aria-labelledby="passwordHelpBlock" minLength={8} required/>
        <button className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Signup