import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper, AdditionDataList } from './Header.styled';
import logo from './../../pictures/rent.png';
import { HeaderContainer, LogoIcon } from './Header.styled';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Favorites', href: '/favorites' },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/" className="header__logo">
          <LogoIcon src={logo} alt="logo"></LogoIcon>
        </NavLink>
        <Navigation navLinks={navLinks} />
        <AdditionDataList>
          <li>
            <p className="addition-data__text">Schedule from 8:00 to 21:00</p>
          </li>
          <li>
            <a href="tel:+380730000000" className="addition-data__link">
              +380 73 000 00 00
            </a>
          </li>
        </AdditionDataList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
