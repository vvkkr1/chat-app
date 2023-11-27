import React from 'react';
// import Homepage from './pages';
// import Register from './pages/Register';
// style 
import './styles.scss';
// import Login from './pages/Login';
import Homepage from './pages/Home';
import Register from './pages/Register';

function HomeApp(){
    return(
        // parent component
        <div>
            <Register/>
            {/* <Homepage/> */}
        </div>
    )
}
export default HomeApp;