import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../Logo/Logo';

const Layout = ({ children }) => {
  const { push } = useHistory();

  const handleGoToHomePage = () => {
    push('/');
  };

  return (
    <div className='container'>
      <Logo onClick={handleGoToHomePage} />
      <div className='content'>{children}</div>
    </div>
  );
};

export default Layout;
