import React from 'react';
import { StyledLink } from './BackLink.styled';
import { HiArrowLeft } from 'react-icons/hi';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size={20} />
      {children}
    </StyledLink>
  );
};

export default BackLink;
