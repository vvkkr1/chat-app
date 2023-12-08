import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase/firebase"

const Search = () => {
  const[username, setUsername] = useState("");
  const[user, setUser] = useState(null);
  const[err, setErr] = useState(false);


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


  return (
    <div className='search'>
      <div className='search-container'>
          <div className="search-form">
            <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          {err && <span>Something is not found....</span>}
          
          {user && <div className="user-chats">
            {/* <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
            <img src={user.photoURL} alt="" />
            <div className="user-chat-info">
              {/* <span>Jane</span> */}
              <span>{user.displayName}</span>
            </div>
          </div>}
          
      </div>
    </div>
  )
}

export default Search