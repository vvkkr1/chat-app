import React from 'react'
import './message.css';

class MessageList extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
          <ul className='message-list'>
            {this.props.messages.map((item)=>{
              return(
                // <div>
                  <li key={item.id}>
                    <div>
                      {item.senderId}
                    </div>
                    <div>
                      {item.text}
                    </div>
                  </li>
                // </div>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default MessageList