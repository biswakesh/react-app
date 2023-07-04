import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate=useNavigate();
    const[Mail,setMail]=useState('')
    const[Password,setPassword]=useState('')
     const handleLogin=()=>
    {
        // console.log(Mail,Password)
    }
       const register=()=>
    {
     navigate("/")
    }
   
  return (
    <div  style={{display:'flex',justifyContent:'center'}}>
    <div style={{backgroundColor:'grey',height:250,width:350,textAlign:'center'}} >
        <h1>Signin to Myapp</h1>
        <p>Enter your email id</p>
     <input type='text' value={Mail} onChange={(e)=>setMail(e.target.value)}/>  
        <p>Password</p>
        <input type='text' value={Password}onChange={(e)=>setPassword(e.target.value)}/>
    <div>
     <button onClick={handleLogin}>Login</button>
     </div>
     <div onClick={register}>New here?Register</div>
     </div>
     </div>
  )
}

export default Signin