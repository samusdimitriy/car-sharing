import PropTypes from 'prop-types';

import CarCard from 'components/Cars/CarCard';

import { AdvertCardStyled, AdvertsListStyled } from './AdvertsList.styled';

const AdvertsList = ({ list = [] }) => {
  return list.length ? (
    <AdvertsListStyled>
      {list.map(item => (
        <CarCard key={`${item.make}_${Math.random(1)}`} car={item} />
      ))}
    </AdvertsListStyled>
  ) : (
    <AdvertCardStyled>
      Sorry, there are no cars with this request in stock...
    </AdvertCardStyled>
  );
};

export default AdvertsList;

AdvertsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
