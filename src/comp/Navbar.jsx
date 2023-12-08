import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
          <span className='logo'>Travl Chat</span>
          <div className="user">
            <img src="https://images.pexels.com/photos/18156056/pexels-photo-18156056/free-photo-of-newlyweds-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Johnny</span>
            <button onClick={()=>signOut(auth)}>logout</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar