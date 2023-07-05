import React, { useEffect, useState } from 'react'
import { auth, provider } from './Firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { db } from './Firebase_config';
import { useNavigate } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import logo from "../assets/logo.png"
import { doc, setDoc } from 'firebase/firestore';
const SigninWithGoogle = ({ setuser }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      const newuser = {
        displayName: result.user.displayName,
        email: result.user.email,
      }
      setuser(newuser)
      const docRef = doc(db, "user", `${result.user.email, result.user.displayName}`);
      const user = await setDoc(docRef, { ...newuser });
      localStorage.setItem('user',JSON.stringify({...newuser}))
      navigate("/chat")
    })
      .catch((err) =>
        alert(err.message));

  }


  return (
    <div style={{ height: 350, width: 400, backgroundColor: 'whitesmoke', justifyContent: 'center', textAlign: 'center', marginTop: 150 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', margin: 60 }} >
        <img src={logo} alt='no img' />
        <button onClick={handleClick} style={{ height: 50 }}>SigninWithGoogle</button>
      </div>
    </div>
  )
}

export default SigninWithGoogle