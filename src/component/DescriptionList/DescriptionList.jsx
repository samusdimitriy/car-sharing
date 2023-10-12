import PropTypes from 'prop-types';
import { StyledDescriptionList } from './DescriptionList.styled';

const DescriptionList = ({ list = [], size = 'large' }) => {
  return (
    <StyledDescriptionList className={`description__list ${size}`}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledDescriptionList>
  );
};

DescriptionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string,
};

export default DescriptionList;
