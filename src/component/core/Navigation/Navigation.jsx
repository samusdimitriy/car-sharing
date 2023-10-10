import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  & ul {
    text-align: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  font-weight: 800;
  text-transform: uppercase;
  padding: 12px;
  color: var(--headingsSecondColor);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;

  &.active {
    color: var(--hoverColor);
  }

  &:hover {
    color: var(--hoverColor);
  }
`;

const Navigation = ({ navLinks }) => {
  return (
    <Nav className="blend nav">
      <NavList className="nav_list">
        {navLinks.map(link => {
          return (
            <li key={link.label}>
              <NavLinkStyled to={link.href} className="nav_link">
                {link.label}
              </NavLinkStyled>
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
