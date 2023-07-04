import React from 'react'
import logo from "../user.png"
import{db} from "../Authentication/Firebase_config"
import { addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const UserList = ({addNewUser,name,id}) => {
    const AddUser=async()=>{
      // console.log(name,id)
      const name=prompt("enter new user");
      if(name){
        try{
          const docRef= await addDoc(collection(db,"webchat"),{
            name:name
                    });
        // console.log(docRef.id)
        }
        catch(e){
          console.error(e);
        }
      }
    };
  return !addNewUser ?(
    <Link to={`user/${id}`} style={{textDecoration:"none",color:"black"}}>
    <div style={{ display:'flex',alignItems:'center',padding:10,border:"1px solid rgba(60,60,60)" ,cursor:'pointer',}}>
     <div className='image' style={{width:"30px"}}>
    <img style={{height:"30%",width:60,borderRadius:30}} src={logo} alt='noimg'/>
     </div>
     <div style={{marginLeft:100,fontWeight:'bold'}}>
        <p>{name}</p>
        </div>   
    </div>
    </Link>
  ):(
  <div onClick={AddUser}>
    <h2>Add new Friend</h2>
  </div>);
}

export default UserList
