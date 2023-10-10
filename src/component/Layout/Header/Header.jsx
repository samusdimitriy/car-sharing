import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from 'component/core/Navigation/Navigation';
import LogoIcon from 'images/icons/LogoIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Favorites', href: '/favorites' },
];

const HeaderContainer = styled.header`
  color: var(--headingsSecondColor);
  padding: 12px;
  margin-bottom: 24px;

  .header__container {
    display: grid;
    grid-template-columns: 6.5rem 1fr 10.25rem;
    justify-items: center;
    align-items: center;
    gap: 0.9375rem;

    min-height: 3rem;

    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;

    max-width: var(--desktop);
    margin: 0 auto;
    padding: 0 0.9375rem;
  }
`;

const HeaderLogo = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px;
  color: var(--headingsColor);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s;

  &:hover {
    color: var(--hoverColor);
  }
`;

const AdditionDataList = styled.ul`
  text-align: start;
`;

const AdditionDataLink = styled.a`
  position: relative;
  z-index: 1;
  display: block;
  width: fit-content;
  color: inherit;
  padding: 5px 0;
  transition: color 0.5s;

  &:hover {
    color: var(--hoverColor);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__container">
        <HeaderLogo to="/" className="header__logo">
          <LogoIcon />
        </HeaderLogo>
        <Navigation navLinks={navLinks} />
        <AdditionDataList className="addition-data__list">
          <li>
            <p className="addition-data__text">Contact us:</p>
          </li>
          <li>
            <AdditionDataLink
              href="tel:+380730000000"
              className="addition-data__link"
            >
              +380 73 000 00 00
            </AdditionDataLink>
          </li>
        </AdditionDataList>
      </div>
    </HeaderContainer>
  );
};

export default Header;
