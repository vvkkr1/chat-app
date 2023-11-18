import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import Title from './components/ChatFeed';
import MessageList from "./components/messageList"
import SendMessageForm from "./components/MessageFrom"
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

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      messages:data
    }
  }

  render(){
    return(
      <div className='App'>
        <div className='chat-app-wrap'>
            <Title/>
            <MessageList messages={this.state.messages}/>
            <SendMessageForm/>
        </div>
      </div>
    )
  }
}
export default App;

// function App() {
//   const steps = [
//     {
//       id:"Great",
//       message:"Hello, Welcome to our chat application",
//       trigger: "Ask Name"
//     },
//     {
//       id:"Ask Name",
//       message:"Please enter your name",
//       trigger:"waiting for your response"
//     },
//     {
//       id:"waiting",
//       user:true,
//       trigger:"Name"
//     },
//     {
//       id:"Name",
//       message:"Hi {previousValue}, your issues",
//       trigger:"issues"
//     },
//     {
//       id:"issues",
//       options:[
//         {
//           value:'React',
//           label:"React",
//           trigger:"React"
//         },
//         {
//           value:'Vue',
//           label:"Vue",
//           trigger:"Vue"
//         }
//       ]
//     },
//     {
//       id:"React",
//       message:"Thanks for telling your react issue",
//       end:true
//     },
//     {
//       id:"Angular",
//       message:"Thanks for telling your angular issues",
//       end:true
//     }
//   ]

//   return (
//     <div className="App">
//       <h1>Hello chat app</h1>
//       <div className='chat-app-wrap'>
//           <Title/>
//           <MessageList/>
//           <SendMessageForm/>
//       </div>
//     </div>
//   );
// }

// export default App;
