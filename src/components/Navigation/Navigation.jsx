import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavLinkItem } from './Navigation.styled';

const Navigation = ({ navLinks }) => {
  return (
    <Nav>
      <ul>
        {navLinks.map(link => {
          return (
            <li key={link.label}>
              <NavLinkItem to={link.href} activeclassname="active">
                {link.label}
              </NavLinkItem>
            </li>
          );
        })}
      </ul>
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
