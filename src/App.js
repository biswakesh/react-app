import React from 'react'
import "./App.css";
import { BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom';
import Homepage from './Home.js/Homepage';
import SigninWithGoogle from './Authentication/SigninWithGoogle';
import ChatSection from"./Home.js/ChatSection"
import { useState } from 'react';
import LeftPanel from './Home.js/Leftpanel';
const App = () => {
  const [user,setuser]=useState(JSON.parse(localStorage.getItem("webchat")));
  console.log(user);
  return ( 
  <BrowserRouter>
  <div className='body' style={{display:'flex',justifyContent:'center'}}>
   {!user? (<SigninWithGoogle setuser={setuser}/>):(
  <div style={{display:"flex",backgroundColor:'white',border:"1px solid black", height:500}} >
   <LeftPanel/>
   <Routes>
    <Route path='/' element={<ChatSection/>}/>
    <Route path='/user/:userid' element={<ChatSection/>}/>
   </Routes>
      </div>
   )}
    </div>
    </BrowserRouter>

  )
}

export default App