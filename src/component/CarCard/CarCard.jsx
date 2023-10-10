import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDisableBodyScroll } from 'hook/useDisableBodyScroll';
import { useUpdateFavoriteAdvertByIdMutation } from 'redux/adverts/advertsSlice';
import { getCarDescList } from 'utils/getCarDescriptionList';
import HeartIcon from 'images/icons/HeartIcon';
import DescriptionList from 'component/kit/DescriptionList/DescriptionList';
import Button from 'component/kit/Button/Button';
import CarModalCard from 'component/CarModalCard/CarModalCard';
import Modal from 'component/Modal/Modal';

const CardWrapper = styled.div`
  display: grid;
  width: 274px;
  height: 450px;

  .thumb-img {
    margin-bottom: 10px;
  }

  .card__thumb-title {
    margin-bottom: 10px;
  }
`;

const ThumbImg = styled.div`
  position: relative;
  height: 268px;

  & img {
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
  }

  & button {
    position: absolute;
    z-index: 1;
    top: 14px;
    right: 14px;
    padding: 15px;

    & svg {
      stroke: var(--whiteColor);
      transition: stroke 0.5s;
    }

    & svg.favorite {
      fill: var(--accentColor);
      stroke: var(--accentColor);
    }

    &:hover,
    &:focus {
      & svg {
        stroke: var(--hoverColor);
      }

      & svg.favorite {
        stroke: var(--whiteColor);
      }
    }
  }
`;

const ThumbTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  color: var(--headingsColor);

  & h3 {
    font-size: var(--headingsFontSize);
    font-weight: 500;
    line-height: 1.33;

    & span {
      color: var(--accentColor);
    }
  }

  & p {
    font-size: var(--standardSize);
    font-weight: 500;
  }
`;

const DescriptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 138px;
`;

const StyledCard = styled.li``;

const CarCard = ({ car }) => {
  const { id, img, make, model, year, rentalPrice, favorite } = car;

  const [isShowModal, setIsShowModal] = useState(false);

  const [updateFavoriteAdvertById] = useUpdateFavoriteAdvertByIdMutation();
  useDisableBodyScroll(isShowModal);

  const descriptionList = getCarDescList(car);

  const handleToggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleToggleFavorite = async id => {
    try {
      console.log('id', id);
      await updateFavoriteAdvertById({ id, favorite: !favorite });
    } catch (error) {
      toast.warn('Sorry something wrong');
    }
  };

  return (
    <StyledCard>
      <CardWrapper className="card">
        <ThumbImg className="thumb-img">
          <img src={img} alt={make} loading="lazy" />
          <Button variant="text" onClick={() => handleToggleFavorite(id)}>
            <HeartIcon className={favorite ? 'favorite' : ''} />
          </Button>
        </ThumbImg>
        <ThumbTitle className="card__thumb-title">
          <h3>
            {`${make} `}
            <span>{model}</span>
            {`, ${year}`}
          </h3>
          <p>{rentalPrice}</p>
        </ThumbTitle>
        <DescriptionListWrapper>
          <DescriptionList
            list={descriptionList}
            size="small"
            className="description"
          />
          <Button className="card__btn" onClick={handleToggleModal}>
            Learn more
          </Button>
        </DescriptionListWrapper>
      </CardWrapper>

      {isShowModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CarModalCard car={car} />
        </Modal>
      )}
    </StyledCard>
  );
};

CarCard.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalConditions: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
}).isRequired;

export default CarCard;
