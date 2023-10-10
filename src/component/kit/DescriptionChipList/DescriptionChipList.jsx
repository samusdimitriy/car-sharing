import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ChipItem = styled.li`
  line-height: 1.5;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  color: var(--blackColor);
  background-color: var(--bgSecondColor);
  border-radius: 39px;

  & > span {
    font-weight: 600;
    color: var(--accentColor);
  }
`;

const DescriptionChipList = ({ list }) => {
  return (
    <ChipList className="chip__list">
      {list.map((item, index) => {
        let [name, number] = item.split(': ');
        if (typeof number === 'string') {
          const newNumber = number.replace(/(\$)(\d+)/, '$2$1');
          number = newNumber;
        }

        return (
          <ChipItem key={index}>
            {!number ? name : `${name}: `}
            {number && <span>{number}</span>}
          </ChipItem>
        );
      })}
    </ChipList>
  );
};

DescriptionChipList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

export default DescriptionChipList;
