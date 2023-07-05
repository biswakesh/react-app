import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, useNavigate, Navigate } from 'react-router-dom';
import Homepage from './Home.js/Homepage';
import SigninWithGoogle from './Authentication/SigninWithGoogle';
import ChatSection from "./Home.js/ChatSection"
import { useState } from 'react';
import LeftPanel from './Home.js/Leftpanel';
const App = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("webchat")));
  console.log(user);

  // useEffect(() => {
  //   let user = JSON.parse(localStorage.getItem("webchat"))
  // })

  const WelcomPage = () => (<>
    <h1 style={{textAlign:'center',paddingLeft:"300px"}}>Hello welcome to webchat</h1>
    <div style={{position:'relative',right:"380px"}}><SigninWithGoogle setuser={setuser} /></div>
  </>
  )

  const ChatPage = () => (<>
    <h1 style={{textAlign:'center',marginTop:'200px'}}>Click on the user to start Chating</h1>
  </>
  )


  return (
    <BrowserRouter>
      <div className='body' style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: "flex", backgroundColor: 'white', border: "1px solid black", height: 500 }} >
            {user && <LeftPanel setuser={setuser} />}
            <Routes>
              <Route path='/' element={<WelcomPage/>} />
              <Route path='/login' element={!user ? <SigninWithGoogle setuser={setuser} /> : <Navigate to={'/chat'}/> } />
              <Route path='/chat' element={ user ? < ChatPage /> : <Navigate to={'/'}/>} />
              <Route path='/user/:userid' element={user ? <ChatSection /> : <Navigate to={'/'}/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>

  )
}

export default App