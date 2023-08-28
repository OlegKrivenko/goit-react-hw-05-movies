import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  margin: 10px 10px 8px 10px;
  padding: 8px;

  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;

  background-color: #c0c0c0;
  color: black;

  &:hover {
    color: white;
    background-color: gray;
  }
`;
