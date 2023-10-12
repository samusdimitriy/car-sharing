import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavLinkStyled, NavList } from './Navigation.styled';

const Navigation = ({ navLinks }) => {
  return (
    <Nav className="blend nav">
      <NavList>
        {navLinks.map(link => {
          return (
            <li key={link.label}>
              <NavLinkStyled to={link.href}>{link.label}</NavLinkStyled>
            </li>
          );
        })}
      </NavList>
    </Nav>
  );
};

Navigation.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
