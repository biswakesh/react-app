import React, { useEffect, useState } from 'react'
import { BsCheckLg, BsSearch } from 'react-icons/bs';
import UserList from './UserList';
import { auth, db } from "../Authentication/Firebase_config"
import img1 from "../assets/leftpanel.jpg"
import { collection, getDocFromServer, getDocs, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
const LeftPanel = ({setuser}) => {
  const [users, setusers] = useState([]);
  const navigate = useNavigate()

  const getgrp = async () => {
    const getData = onSnapshot(collection(db, "user"), (snapshot) => {
      let list = []
      snapshot.docs.forEach((doc) => {
        console.log(doc)
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(list)
      setusers(prev => list);
    });
  }

  useEffect(() => {
    getgrp();
  }, []);
  
  return (
    <div className='container-1' style={{ backgroundImage: `url(${img1})`, width: 300 }} >
      <div className="header" style={{ height: 100, border: "1px solid whitesmoke", backgroundColor: "rgba(40,90,90)" }} >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <img src />
          <span><button onClick={async() => {
            try {
              await signOut(auth)
              localStorage.removeItem("webchat")
              console.log(localStorage.getItem("webchat"))
              console.log(auth)
              navigate('/login')
              setuser('')
            } catch (error) {
              console.log(error)
            }
          }}>Logout</button> <BsSearch /></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <h4>chat</h4>
          <h4>status</h4>
          <h4>calls</h4>
        </div>
      </div>
      <div>
        {
          users.map((user) => {
            console.log(user)
            return <UserList key={user.id} name={user.displayName} id={user.id} />
          })
        }
      </div>

    </div>

  )
}

export default LeftPanel