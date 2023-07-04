import React, { useState, useEffect } from 'react'
import "./ChatArea.css";
import "./ChatMessage.css";
import { BsSearch } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import logo from "../user.png"
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import ChatMessage from './ChatMessage';
import { useParams } from 'react-router-dom';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, } from 'firebase/firestore';
import { db } from '../Authentication/Firebase_config';
const ChatSection = () => {
   const { userid } = useParams();
  // console.log(userid)
  const [chatname, setchatname] = useState("");
  const[input,setInput]=useState('');
  const[message,setmessage]=useState([]);
  useEffect(() => {
    if (userid) {
      const getuser = onSnapshot(doc(db, "webchat", userid), (doc) => {
        setchatname(doc.data().name);
      });
      const message=query(collection(db,"webchat",userid,"message"),orderBy("timestamp","asc"))
      const getmessage=onSnapshot(message,(snapshot)=>{
        let messagelist=[];
        snapshot.docs.forEach((doc)=>{
         messagelist.push({...doc.data("")})
        });
        setmessage(messagelist);
      })
    }
  }, [userid]);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input == "") {
      return alert("enter ur message")
    }
     {
      try {
        const senddata = await addDoc(collection(db, "webchat", userid, "message"), {
          message:input,
          // name:"",
          timestamp: serverTimestamp(),
        })
      }
      catch (e) {
        console.log("error", e);
      }setInput("")
    }};
    return (
      <div className='container-2'>
        <div className='Header'>
          <img src={logo} alt='noimage' />
          <p>{chatname}</p>
          <div style={{ marginLeft: 450, marginTop: 15 }}>
            <span><BsSearch /><BiDotsVerticalRounded /></span>
          </div>
        </div>
        {/* chat message */}
        <div className='chatArea'>
        <div className='chatbody'>
          {message.map((msg)=>(
       <p className={`chatmessage ${true&& "chatreceiver"}`}> 
       <span className='chatname'> </span>{msg.message}
       <p style={{fontSize:10,marginLeft:30}} className='chattimestamp'>{new Date(msg.timestamp?.toDate()).toUTCString()}</p>
       </p>
      //  <p className='chatmessage'> 
      //  <span className='chatname'>hy </span>ur hello
      //  <span className='chattimestamp'>{new Date().toLocaleTimeString()}</span>
      //  </p>
       ))}
    </div>
        </div>
        <div className='footer'>
          <BsFillEmojiSmileFill style={{ margin: 15 }} />
          <input type='text' value={input} onChange={(e) => {
           setInput(e.target.value);
          }} placeholder='enter your text here' style={{ margin: 10, width: 450, height: 25 }} />
          <div style={{ marginTop: 10 }} onClick={(e) => sendMessage(e)} >
            <BiSend style={{ height: 25, width: 40 }} />
          </div>
          <div style={{ marginTop: 10 }}>
            <AiFillCamera style={{ height: 25, width: 40 }} />
          </div>
        </div>
      </div>
    )
  }


  export default ChatSection