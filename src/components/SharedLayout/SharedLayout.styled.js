import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  // padding: 0 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  // border-radius: 5px;

  background-color: #c0c0c0;
  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.8);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: gray;
  }
`;
