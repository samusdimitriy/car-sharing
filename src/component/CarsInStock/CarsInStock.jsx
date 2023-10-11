import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetAdvertsQuery } from 'redux/adverts/advertsSlice';
import AdvertsList from 'component/AdvertsList/AdvertsList';
import styled from 'styled-components';

const InStockContainer = styled.div`
  margin-top: 28px;
`;

const InStockButton = styled(NavLink)`
  display: block;
  width: fit-content;
  font-size: var(--headingsSecondFontSize);
  font-weight: 600;
  line-height: 1.42;
  margin: auto;
  margin-top: 24px;
  color: var(--headingsColor);
  border: 2px solid var(--accentColor);
  border-radius: 12px;
  cursor: pointer;
  padding: 12px 50px;
  transition: background-color 0.5s, color 0.5s;

  &:hover,
  &:focus {
    color: var(--whiteColor);
    background-color: var(--hoverColor);
  }
`;

const CarsInStock = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  let notAllAdverts = [];

  if (!isLoading) {
    const n = adverts.length >= 8 ? 8 : 4;
    notAllAdverts = adverts.slice(0, n);
  }

  return (
    <InStockContainer className="in-stock__container">
      {!isLoading && <AdvertsList list={notAllAdverts} />}
      <InStockButton className="in-stock__btn" to="/catalog">
        More adverts
      </InStockButton>
    </InStockContainer>
  );
};

export default CarsInStock;
