import PropTypes from 'prop-types';
import { ChipItem, ChipList } from './DescriptionChipList.styled';

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
