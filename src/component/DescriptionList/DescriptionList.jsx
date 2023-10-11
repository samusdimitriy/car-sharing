import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDescriptionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--descColor);
  width: fit-content;

  & > li {
    &:not(:last-child) {
      padding-right: 6px;
      margin-right: 6px;
      border-right: 1px solid var(--borderColor);
    }
  }

  &.small {
    max-width: 274px;
  }

  &.medium {
    max-width: 280px;
  }

  &.large {
    max-width: 100%;
  }
`;

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
