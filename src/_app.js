import React, { useContext } from 'react';
// style 
import './styles.scss';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Home';
import { AuthContext } from './context/AuthContext';

function HomeApp(){
    const currUser = useContext(AuthContext);

    // console.log(currUser);


    const ProtectedRoute = ({children})=>{
        if(!currUser){
            return <Navigate to = "/login" />
        }
        return children
    }

    return(
        // parent component
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index 
                                element={
                                    <ProtectedRoute>
                                        <Homepage />
                                    </ProtectedRoute>}
                                    />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default HomeApp;