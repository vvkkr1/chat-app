import { doc, onSnapshot } from 'firebase/firestore';
import React,{useContext, useEffect, useState} from 'react'
import { db } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';

const Chats = () => {

  const[chats, setChats] = useState([]);

  const currUser = useContext(AuthContext);
  
  useEffect(()=>{
    const getChats = async () => { 
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data())
        console.log("Current data:", doc.data());
      })
      return () => {
        unsub();
      }
    }
    currUser.uid && getChats()
  },[currUser.uid]);

  console.log("_____________",chats);

  return (
    <div className='chats'>
       <div className='chats-container'>

          <div className="user-chat">
                <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user-chat-info">
                  <span>Jane</span>
                  <p>Hello</p>
                </div>
          </div>

          <div className="user-chat">
                <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user-chat-info">
                  <span>Jane</span>
                  <p>Hello</p>
                </div>
          </div>

          <div className="user-chat">
                <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user-chat-info">
                  <span>Jane</span>
                  <p>Hello</p>
                </div>
          </div>
          
       </div>
    </div>
  )
}

export default Chats