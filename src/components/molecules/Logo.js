import React from 'react';
import styled from '@emotion/styled';

import HeadingOne from '../atoms/HeadingOne';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoWrapper onClick={onClick}>
      <HeadingOne>PokéPortal</HeadingOne>
    </LogoWrapper>
  );
};

export default Logo;
