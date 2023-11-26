import React from 'react'
import Add from '../img/addAvatar.png'
function Register(){
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Travl Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display:"none"}} type='file' id='file'/>
            <label htmlFor='file'>
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>You do have an ccount? Login</p>
      </div>
    </div>
  )
}
export default Register;
