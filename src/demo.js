import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
import './App.css';




const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

  const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
      <div className='App'>
        <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
          onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      </div>
    )
  
}
export default App;