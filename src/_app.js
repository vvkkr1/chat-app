import React from 'react';
// import Homepage from './pages';
import Register from './pages/Register';
// style 
import './styles.scss';
import Login from './pages/Login';
import Home from './pages/Home';

function HomeApp(){
    return(
        // parent component
        <div>
            <Home/>
        </div>
    )
}
export default HomeApp;