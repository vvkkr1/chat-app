import React from 'react';
// style 
import './styles.scss';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Home';

function HomeApp(){
    return(
        // parent component
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Homepage/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default HomeApp;