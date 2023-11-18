import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
// import LoginForm from ""
import './App.css';
// import Title from './components/ChatFeed';
import MessageList from "./components/messageList"
// import SendMessageForm from "./components/MessageFrom"
import MessageForm from './components/MessageFrom';
// import {Segment} from 'semantic-ui-react';
// import {Segment} from 'semantic-ui-css/semantic.min.css';

const data = [
  {
    senderId:"Vivek Kumar",
    text:"who'll win world cup"
  },
  {
    senderId:"george",
    text:"who'll win world cup"
  }
]

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

  const App = () => {
    if(!localStorage.getItem('username')) 
    // return <LoginForm/>
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