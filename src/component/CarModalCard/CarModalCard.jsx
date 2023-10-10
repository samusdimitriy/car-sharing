import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCarDetailsDescList } from 'utils/getCarDescriptionList';
import { formatingCommasToNumber } from 'utils/formatingCommasToNumber';
import DescriptionList from '../kit/DescriptionList/DescriptionList';
import DescriptionChipList from '../kit/DescriptionChipList/DescriptionChipList';

const CardModalWrapper = styled.div`
  display: grid;
  gap: 24px;
  padding: 0 24px 24px;
  width: 462px;
  color: var(--headingsColor);
`;

const CardModalImg = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  margin-bottom: -10px;
  border-radius: 14px;
`;

const CarHeader = styled.div`
  h3 {
    font-size: var(--headingsFontSize);
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    span {
      color: var(--accentColor);
    }
  }

  ul {
    margin-bottom: 14px;
  }

  p {
    font-size: var(--headingsSecondFontSize);
    font-weight: 400;
    line-height: 1.42;
  }
`;

const AccessoriesWrapper = styled.div`
  h4 {
    font-size: var(--headingsSecondFontSize);
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
  }

  div {
    display: grid;
    gap: 4px;
  }
`;

const RentalConditionsWrapper = styled.div`
  h4 {
    font-size: var(--headingsSecondFontSize);
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
  }
`;

const RentalButton = styled.a`
  width: fit-content;
  font-size: var(--headingsSecondFontSize);
  font-weight: 600;
  line-height: 1.42;
  color: var(--whiteColor);
  background-color: var(--accentColor);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 12px 50px;
  transition: background-color 0.5s;

  &:hover,
  &:focus {
    background-color: var(--hoverColor);
  }
`;

function CarModalCard({ car }) {
  const {
    img,
    make,
    model,
    year,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;
  const descriptionList = getCarDetailsDescList(car);

  const rentalConditionsArray = [
    ...rentalConditions.split('\n'),
    `Milage: ${formatingCommasToNumber(mileage.toString())}`,
    `Price: ${rentalPrice}`,
  ];

  return (
    <CardModalWrapper>
      <CardModalImg src={img} aria-label={`${make} ${model}`} />
      <CarHeader>
        <h3>
          {`${make} `}
          <span>{model}</span>
          {`, ${year}`}
        </h3>
        <DescriptionList list={descriptionList} size="medium" />
        <p>{description}</p>
      </CarHeader>

      <AccessoriesWrapper>
        <h4>Accessories and functionalities:</h4>
        <div>
          <DescriptionList list={accessories} />
          <DescriptionList list={functionalities} />
        </div>
      </AccessoriesWrapper>

      <RentalConditionsWrapper>
        <h4>Rental Conditions:</h4>
        <DescriptionChipList list={rentalConditionsArray} />
      </RentalConditionsWrapper>

      <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
    </CardModalWrapper>
  );
}

CarModalCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    accessories: PropTypes.array.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    favorite: PropTypes.bool,
  }).isRequired,
};

export default CarModalCard;
