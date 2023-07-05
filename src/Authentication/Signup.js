import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase_config'
const Signup = () => {
  const [Name, setName] = useState('')
  const [Mail, setMail] = useState('')
  const [Password, setPassword] = useState("")
  const [err, setErr] = useState(false)
  // const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, Password, Mail);
    }
    catch (err) {
      setErr(true)
      console.log(err)
    }
  }
  
  //   await signInWithEmailAndPassword(auth,Name, Mail, Password)
  //       .then((userCredential) => {
  //                       const user = userCredential.user;
  //           console.log(user);

  //       })
  //       .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.log(errorCode, errorMessage);

  //       })
  //     }
  // const login=()=>
  // {
  //  navigate("/signin")
  // }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'grey', height: 450, width: 350, textAlign: 'center' }} >
        <h1>Signup to Myapp</h1>
        <p> Name</p>
        <input type='text' value={Name} onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <input type='email' value={Mail} onChange={(e) => setMail(e.target.value)} />
        <p>Password</p>
        <input type='text' value={Password} onChange={(e) => setPassword(e.target.value)} />
        <div><input type='file' alt="" /></div>
        <div>
          <button onClick={handleRegister} style={{ cursor: 'pointer' }}>Register</button>
          {err && <span>Error occur</span>}
        </div>
        <div >Already have an account?Login</div>
      </div>
    </div>

  )
}

export default Signup
