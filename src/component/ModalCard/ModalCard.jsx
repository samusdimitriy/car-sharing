import React from 'react';
import PropTypes from 'prop-types';
import { getCarDetailsDescList } from 'utils/getCarDescriptionList';
import { commaToNumber } from 'utils/commaToNumber';
import DescriptionList from '../DescriptionList/DescriptionList';
import DescriptionChipList from '../DescriptionChipList/DescriptionChipList';
import {
  Accessories,
  CarTitle,
  ModalImage,
  RentalButton,
  RentalConditions,
  Wrapper,
} from './ModalCard.styled';

function ModalCard({ car }) {
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
    `Milage: ${commaToNumber(mileage.toString())}`,
    `Price: ${rentalPrice}`,
  ];

  return (
    <Wrapper>
      <ModalImage src={img} aria-label={`${make} ${model}`} />
      <CarTitle>
        <h3>
          {`${make} `}
          <span>{model}</span>
          {`, ${year}`}
        </h3>
        <DescriptionList list={descriptionList} size="medium" />
        <p>{description}</p>
      </CarTitle>

      <Accessories>
        <h4>Accessories and functionalities:</h4>
        <div>
          <DescriptionList list={accessories} />
          <DescriptionList list={functionalities} />
        </div>
      </Accessories>

      <RentalConditions>
        <h4>Rental Conditions:</h4>
        <DescriptionChipList list={rentalConditionsArray} />
      </RentalConditions>

      <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
    </Wrapper>
  );
}

ModalCard.propTypes = {
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

export default ModalCard;
