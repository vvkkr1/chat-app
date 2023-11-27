import React from 'react'
import Add from '../img/addAvatar.png'
function Register(){
  function handleSubmit(e){
    //to overcome refresh
    e.preventDefault();
    // console.log(e.target[0].value) total - 4 targets with its index
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    //if you are using file mention how many attachments you need
    const file = e.target[3].files[0]
  }

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Travl Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
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
