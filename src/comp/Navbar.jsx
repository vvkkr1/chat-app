import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
          <span className='logo'>Travl Chat</span>
          <div className="user">
            <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Vivek</span>
            <button>logout</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar