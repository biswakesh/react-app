import React from 'react'
import logo from "../assets/user.png"
import { db } from "../Authentication/Firebase_config"
import { addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const UserList = ({name, id }) => {
   
 return(<Link to={`user/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 10, border: "1px solid rgba(60,60,60)", cursor: 'pointer', }}>
        <div className='image' style={{ width: "30px" }}>
          <img style={{ height: "30%", width: 60, borderRadius: 30 }} src={logo} alt='noimg' />
        </div>
        <div style={{ marginLeft: 100, fontWeight: 'bold' }}>
          <p>{name}</p>
        </div>
      </div>
    </Link>)
}

export default UserList
