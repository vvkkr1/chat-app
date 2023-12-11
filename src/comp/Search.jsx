import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import {db} from "../firebase/firebase"
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const[username, setUsername] = useState("");
  const[user, setUser] = useState(null);
  const[err, setErr] = useState(false);

  const currUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db,"user"),
    where("displayName","==",username));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
    }
    catch(error){
      setErr(true);
    }
   
  }

  const handleKey = e =>{
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () =>{
    //check whether the group(chat collection) exist, if not create.
    const combinedId = 
                        currUser.uid > user.uid 
                        ? 
                        currUser.uid + user.uid 
                        : 
                        user.uid + currUser.uid;

    try{
      const res = await getDoc(doc(db,"chats",combinedId));

      //condition
      if(!res.exists()){
        // create chat in chat collection db.
        await setDoc(doc(db, "chats", combinedId), {messages:[]})

        //create user chats
        await updateDoc(doc(db,"userChats",currUser.uid),{
          [combinedId+".userInfo"]: {
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        })
        //create user chats
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]: {
            uid:currUser.uid,
            displayName:currUser.displayName,
            photoURL:currUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        })
      }
    }
    catch(err){setErr(true);}
    //create user chats
    setUser(null);
    setUsername("")
  }

  return (
    <div className='search'>
      {/* <div className='search-container'> */}
          <div className="search-form">
            <input 
              type="text" 
              placeholder='Find a user' 
              onKeyDown={handleKey} 
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
            />
          </div>
          {err && <span>User not found!....</span>}
          {user && (
            <div className="user-chats" onClick={handleSelect}>
              <img src={user.photoURL} alt="" />
              <div className = "user-chat-info">
                 {/* <span>Jane</span> */}
                 <span>{user.displayName}</span>
              </div>
            </div>
          )}
      {/* </div> */}
    </div>
  )
}

export default Search