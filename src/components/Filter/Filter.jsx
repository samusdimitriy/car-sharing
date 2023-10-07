import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectAdvertsFilter } from 'redux/filter/filterSelectors';
import { setAdvertsFilter } from 'redux/filter/filterSlice';

import { removeCommasFromString } from '../../helpers/handleCommaDel';

import FromToField from 'components/MileageField/MileageField';
import SelectField from 'components/SelectField/SelectField';
import Button from 'components/Button/Button';

import { toast } from 'react-toastify';
import Container from './Filter.styled';

const Filter = ({ filtersList }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectAdvertsFilter);

  const handleChangeFilter = e => {
    e.preventDefault();

    const { brand, price, from, to } = e.target.elements;

    if (
      (!brand.value || brand.value === 'Enter the text') &&
      (!price.value || price.value === 'To $') &&
      !from.value &&
      !to.value
    ) {
      toast.info('Please chose one of filters');
      return;
    }

    const newfilters = {
      [brand.name]: brand.value !== 'Enter the text' ? brand.value : '',
      [price.name]: price.value !== 'To $' ? price.value : '',
      mileage: {
        from: removeCommasFromString(from.value),
        to: removeCommasFromString(to.value),
      },
      prices: [],
    };

    dispatch(setAdvertsFilter(newfilters));
  };

  return (
    <Container onSubmit={handleChangeFilter}>
      <SelectField
        name="brand"
        label="Car brand"
        value={filter.brand}
        optionList={filtersList.brands}
      />
      <SelectField
        name="price"
        label="Price/ 1 hour"
        placeholder="To $"
        value={filter.price}
        optionList={filtersList.prices}
      />
      <FromToField
        name="mileage"
        label="Сar mileage / km"
        value={filter.mileage}
      />
      <Button type="submit">Search</Button>
    </Container>
  );
};

export default Filter;

Filter.propTypes = PropTypes.shape({
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
}).isRequired;
