import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Catalog, Favorite, SNavLink } from './Header.styled';
import { Close } from '../CarList/DetailCar/DetailCar.styled';

const NavContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100vw;
  height: 100vh;
  ul {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    font-family: 'Caveat', cursive;
    font-size: 28px;
  }
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
`;

const HeaderMenu = ({ handleClose }) => {
  return (
    <Container>
      <NavContainer>
        <Close onClick={handleClose} size={40} />
        <ul>
          <li>
            <SNavLink onClick={handleClose} to={'/catalog'}>
              <Catalog size={24} />
              Catalog
            </SNavLink>
          </li>
          <li>
            <SNavLink onClick={handleClose} to={'/favorite'}>
              <Favorite size={24} />
              Favorite
            </SNavLink>
          </li>
        </ul>
      </NavContainer>
    </Container>
  );
};

HeaderMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default HeaderMenu;
