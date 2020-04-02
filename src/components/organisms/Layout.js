import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../molecules/Logo';
import Container from '../atoms/Container';

const Layout = ({ children }) => {
  const { push } = useHistory();

  const handleGoToHomePage = () => {
    push('/');
  };

  return (
    <Container>
      <Logo onClick={handleGoToHomePage} />
      {children}
    </Container>
  );
};

export default Layout;
