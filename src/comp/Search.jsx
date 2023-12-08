import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-container'>
          <div className="search-form">
            <input type="text" placeholder='Find a user' />
          </div>
          <div className="user-chats">
            <img src="https://images.pexels.com/photos/13484361/pexels-photo-13484361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="user-chat-info">
              <span>Jane</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Search