import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const currUser = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='navbar-container'>
          <span className='logo'>Travl Chat</span>
          <div className="user">
            <img src={currUser.photoURL} alt="" />
            {/* <span>Johnny</span> */}
            <span>{currUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar