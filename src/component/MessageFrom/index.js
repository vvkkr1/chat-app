import React,{useState} from 'react'
import {SendOutlined,PictureOutlined} from '@ant-design/icons'
import {sendMessage, isTyping} from 'react-chat-engine'
const MessageForm = (props) => {
  const [value,setValue]=useState('');
  const{chatId,creds}=props;

  const handleChangeEvent = (event)=>{
    setValue(event.target.value);
    isTyping(props,chatId)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    const text = value.trim();

    if(text.length>0){
      sendMessage(creds,chatId,{text});
    }
    setValue('');
  }

  const handleUpload=(event) =>{
    sendMessage(creds,chatId, {files:event.target.files,text:''})
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
        <input type='text' 
               name='msg' 
               placeholder='Send a message...' 
               value={value}
               onChange={handleChangeEvent}
               onSubmit={handleSubmit}
               className='input-message'
              />
              <label htmlFor='upload-button'>
                <span className='image-button'>
                  <PictureOutlined className='picture-icon'/>
                </span>
              </label>
          <input type='file'
                 multiple={false}
                 id='upload-button'
                 style={{display:"none"}}
                 onChange={handleUpload.bind(this)} 
              />
                <button type='submit' className='send-button'>
                  <SendOutlined className="send-icon"/>
                </button>
            
                
     </form>
  )
}

export default MessageForm