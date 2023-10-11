import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { selectAdvertsFilter } from 'redux/filters/filtersSelectors';
import { setAdvertsFilter } from 'redux/filters/filtersSlice';
import { removeCommasFromString } from 'utils/commaToNumber';

import FromToField from 'component/FromToField/FromToField';
import SelectField from 'component/SelectField/SelectField';
import Button from 'component/Button/Button';

const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`;

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
      toast.info('Please choose one of the filters');
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
    <FilterForm onSubmit={handleChangeFilter}>
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
        label="Car mileage / km"
        value={filter.mileage}
      />
      <Button type="submit">Search</Button>
    </FilterForm>
  );
};

export default Filter;
