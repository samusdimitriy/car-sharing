import PropTypes from 'prop-types';
import {
  createAddressObject,
  reduceFunctionalitiesArr,
} from './helpers/carHelpers';
import {
  CarListItem,
  CardHead,
  DescBox,
  Fav,
  SList,
  UnFav,
} from './CarsList.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/cars/carsSlice';
import { favoriteSelector } from '../../redux/cars/carsSelectors';
import DetailCar from './DelailCar';

const CarCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    img,
    type,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    id,
    photoLink,
    functionalities,
    address,
  } = data;
  const { city, country } = createAddressObject(address);
  const dispatch = useDispatch();
  const handleClick = e => {
    if (e.target.tagName === 'path') {
      const icon = e.target.closest('svg');
      const id = icon.id;
      if (id === 'unFav') {
        setIsFavorite(true);
        dispatch(addFavorite(data));
      } else {
        setIsFavorite(false);
        dispatch(removeFavorite(data.id));
      }
    } else {
      if (e.target.id === 'unFav') {
        setIsFavorite(true);
        dispatch(addFavorite(data));
      } else {
        setIsFavorite(false);
        dispatch(removeFavorite(data.id));
      }
    }
  };

  const favorite = useSelector(favoriteSelector);
  useEffect(() => {
    const isFavorite = favorite.some(fav => fav.id === data.id);
    setIsFavorite(isFavorite);
  }, [favorite, data]);

  const handleOpen = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const handleClose = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <>
      <CarListItem>
        {!isFavorite ? (
          <UnFav id="unFav" size={18} onClick={handleClick} />
        ) : (
          <Fav id="fav" size={18} onClick={handleClick} />
        )}
        {img ? (
          <img onClick={handleOpen} src={img} alt={make} />
        ) : (
          <img onClick={handleOpen} src={photoLink} alt={make} />
        )}
        <DescBox onClick={handleOpen}>
          <CardHead>
            <div>
              <p className="make">{make}</p>
              <p className="model"> {model && model}</p>
              <p>,</p>
              <p className="year">{year}</p>
            </div>
            <p>{rentalPrice}</p>
          </CardHead>
          <SList>
            <li>{city}</li>
            <li>{country}</li>
            <li>{rentalCompany}</li>
            <li>{type}</li>
            <li>{model}</li>
            <li>{id}</li>
            <li>{reduceFunctionalitiesArr(functionalities)}</li>
          </SList>
        </DescBox>
        <button type="button" onClick={handleOpen}>
          Learn more
        </button>
      </CarListItem>
      {isOpen && (
        <DetailCar
          data={data}
          isFavorite={isFavorite}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

CarCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    photoLink: PropTypes.string,
    type: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    id: PropTypes.number,
    functionalities: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
  }).isRequired,
};

export default CarCard;
