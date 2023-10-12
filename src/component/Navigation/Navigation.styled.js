import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  & ul {
    text-align: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  font-size: 1rem;
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
