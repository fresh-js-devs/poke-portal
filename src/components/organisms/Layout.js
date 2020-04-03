import React from 'react';

import Logo from '../molecules/Logo';
import Container from '../atoms/Container';

const Layout = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
};

export default Layout;
