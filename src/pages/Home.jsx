import React from 'react'
import Sidebar from '../comp/Sidebar'
import ChatSidebar from '../comp/ChatSidebar'


function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage-container">
            <Sidebar/>
            <ChatSidebar/>
        </div>
    </div>
  )
}

export default Homepage