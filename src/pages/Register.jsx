import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth,storage} from "../firebase/firebase";

import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../firebase/firebase"
import { useNavigate, Link } from 'react-router-dom';


function Register(){

  const[err,setErr]=useState(false)
  const navigate=useNavigate();


  async function handleSubmit(e){
    //to overcome refresh
    e.preventDefault();

    // console.log(e.target[0].value) total - 4 targets with its index
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    //if you are using file mention how many attachments you need
    const file = e.target[3].files[0]

//Promises used here
    //here is the main part
      // const auth = getAuth();




      try{
            // const {user} = await createUserWithEmailAndPassword(auth, email, password);

            // console.log(user)

        //image upload logic in then

            // const storage = getStorage();

            await createUserWithEmailAndPassword(auth, email, password).then(async(userRec)=>{
              const user=userRec.user;
              
              const storageRef = ref(storage, 'images/rivers.jpg');

              const uploadTask = uploadBytesResumable(storageRef, file);
  
              uploadTask.on(
                (error) => {
                  setErr(true)
                  // Handle unsuccessful uploads
                }, 
                () => {
                  // Handle successful uploads on complete
                  getDownloadURL(uploadTask.snapshot.ref).then(async function (downloadURL) {
                    // console.log('File available at', downloadURL);
                    await updateProfile(user,{
                      displayName,
                      photoURL:downloadURL
                    });
                    // onAuthStateChanged();
                    // const docRef = doc(db, 'userData', user.uid)

                    await setDoc(doc(db, 'userData', user.uid),{
                      uid: user.id || null,
                      displayName,
                      email,
                      photoURL:downloadURL
                    })
                    // await setDoc(doc(db,"userChats",user.id),{});
                    navigate("/");
                  });
                }
              );
            }).catch((error)=>{
              console.log("error_______________")
            })

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
            {err && <span>Something went wrong!!!!!</span>}
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
export default Register;
