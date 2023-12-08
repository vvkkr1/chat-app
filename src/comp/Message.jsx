import React from 'react'

const Message = () => {
  return (
    <div className='message'>
       <div className="message-container owner">
          <div className="message-info">
            <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>just now</span>
          </div>
          <div className="message-content">
            <p>hello</p>
            <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
       </div>
    </div>
  )
}

export default Message