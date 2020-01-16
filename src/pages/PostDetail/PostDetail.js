import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faRetweet,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import './PostDetail.css';
import Layout from '../../components/Layout/Layout';

const PostDetail = () => {
  return (
    <Layout>
      <div className='post-detail'>
        <div className='post-detail__header'>
          <img
            src='https://randomuser.me/api/portraits/women/11.jpg'
            alt='Random user'
          />
          <div className='post-detail__header-name'>
            <strong>Some Interesting Guy</strong>
            <span>@someInterestingGuy</span>
          </div>
        </div>
        <div className='post-detail__content'>
          <div className='post__message'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            exercitationem vitae qui maxime facere vero animi dicta? Dolorem
            alias repellendus impedit et eligendi nulla repudiandae delectus
            explicabo? Blanditiis, asperiores ex.
          </div>
          <div className='post-detail__action-buttons'>
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
