import PropTypes from 'prop-types';
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

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
