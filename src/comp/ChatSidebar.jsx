import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

const ChatSidebar = () => {
  return (
    <div className='chat-sidebar'>
        <div className='chat-sidebar-container'>
            <div className="chat-info">
                <span>Jane</span>
                <div className="chat-icons">
                  <img src={Cam} alt="" />
                  <img src={Add} alt="" />
                  <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    </div>
  )
}

export default ChatSidebar