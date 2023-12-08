import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB4SimkLbFQWGfS3Xsd-NvmL_XhCGv1G24",
  authDomain: "chat-33690.firebaseapp.com",
  projectId: "chat-33690",
  storageBucket: "chat-33690.appspot.com",
  messagingSenderId: "232626569990",
  appId: "1:232626569990:web:411c85e657e912fc5dd487",
  measurementId: "G-MBJ88D3THR"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
// const analytics = getAnalytics(app);
 const storage = getStorage();

//for database
 const db = getFirestore();
//  const users=collection(db,"users");

 export {app, auth, storage, db}

