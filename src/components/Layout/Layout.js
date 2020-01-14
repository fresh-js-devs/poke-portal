import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Logo from '../Logo/Logo';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleGoToHomePage = () => {
    push('/');
  };

  return (
    <div className='App'>
      <Logo onClick={handleGoToHomePage} />
      <div className='container'>
        <h1>
          {pathname === '/' ? (
            'Main page'
          ) : (
            <>
              <FontAwesomeIcon
                className='go-back-icon'
                icon={faArrowLeft}
                onClick={handleGoToHomePage}
              />{' '}
              Tweet
            </>
          )}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default Layout;
