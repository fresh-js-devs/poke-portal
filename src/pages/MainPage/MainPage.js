import React from 'react';
import { useHistory } from 'react-router-dom';

import MessageBox from '../../components/MessageBox/MessageBox';
import Post from '../../components/Post/Post';
import Layout from '../../components/Layout/Layout';

const MainPage = () => {
  const { push } = useHistory();

  const handleGoToPostDetail = () => {
    push('/tweet/test');
  };

  return (
    <Layout>
      <MessageBox />
      <div className='content'>
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
        <Post onClick={handleGoToPostDetail} />
      </div>
    </Layout>
  );
};

export default MainPage;
