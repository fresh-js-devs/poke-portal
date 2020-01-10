import React from 'react';

import './Post.css';

function Post() {
  return (
    <div className='post'>
      <div className='post__profile'>
        <img
          src='https://randomuser.me/api/portraits/women/11.jpg'
          alt='Random user'
        />
      </div>
      <div className='post__content'>
        <div className='post__content-header'>
          <h4>Some interesting guy</h4>
          <span className='profile-name'>@someInterestingGuy</span>
          <span className='post-added'>40s</span>
        </div>
        <div className='post__message'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          exercitationem vitae qui maxime facere vero animi dicta? Dolorem alias
          repellendus impedit et eligendi nulla repudiandae delectus explicabo?
          Blanditiis, asperiores ex.
        </div>
        <div className='post__action-buttons'>
          <i>Comment</i>
          <i>Retweet</i>
          <i>Like</i>
          <i>Share</i>
        </div>
      </div>
    </div>
  );
}

export default Post;
