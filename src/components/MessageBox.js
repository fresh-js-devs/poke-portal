import React from 'react';

import './MessageBox.css';

function MessageBox() {
  return (
    <div className='message-box'>
      <div className='message-box__profile'>
        <img
          src='https://randomuser.me/api/portraits/women/11.jpg'
          alt='Random user'
        />
      </div>
      <div className='message-box__main'>
        <textarea placeholder="What's happening?"></textarea>
        <div className='message-box__action-buttons'>
          <button className='btn-primary'>Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
