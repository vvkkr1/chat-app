import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
// import Add from '../img/addAvatar.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';


function Login(){

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

    async function handleSubmit(e){
    //to overcome refresh
    e.preventDefault();

    // console.log(e.target[0].value) total - 4 targets with its index
    const email = e.target[0].value;
    const password = e.target[1].value;

      try{
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
      }  

      catch(error){
        setErr(true);
        // console.log("Error!!!",error)
        console.log("________________________",error)
      }
        console.log(email);
    }


  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Travl Chat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Sign in</button>
            {err && <span>Something went wrong!!!!!</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
export default Login;
