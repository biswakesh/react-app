import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import UserList from './UserList';
import{db} from "../Authentication/Firebase_config"
import img1 from "./leftpanel.jpg"
import { collection ,getDocFromServer, getDocs, onSnapshot} from 'firebase/firestore';
const LeftPanel = () => {
    const[user,setuser]=useState([]);
    const getgrp=async()=>{
      const getData=onSnapshot(collection(db,"webchat"),(snapshot)=>{
        let list=[]
        snapshot.docs.forEach((doc)=>{
          list.push({
            id:doc.id,
            ...doc.data(),
          });
        });
        setuser(list);
      });
    }
    useEffect(()=>{
    getgrp();
    } ,[]);
  return (
      <div className='container-1' style={{backgroundImage:`url(${img1})`,width:300}} >
        <div  className="header"style={{height:100, border:"1px solid whitesmoke", backgroundColor:"rgba(40,90,90)"}} >
          <div style={{display:'flex',justifyContent:'space-between', marginTop:10}}>
        <img src/>
         <span><button>Logout</button> <BsSearch/></span>
          </div>
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <h4>chat</h4>
            <h4>status</h4>
            <h4>calls</h4>
          </div>
        </div>
<div>
  <UserList addNewUser/>
  {
    user.map((user)=>{
      return<UserList key={user.id}name={user.displayname} id={user.id}/>
    })
  }
  </div>

</div>
    
  )
}

export default LeftPanel