import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  & ul {
    text-align: center;
  }
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  display: block;
  font-weight: 800;
  text-transform: uppercase;
  padding: 12px;
  color: #8a8a89;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s;

  &.active {
    color: #fff;
    background-color: #0b44cd;
  }

  &:after,
  &:before {
    transition: color 0.5s, width 0.5s, left 0.5s, right 0.5s;
  }

  &:after,
  &:before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    margin: auto;
    background: #0b44cd;
    color: transparent;
    opacity: 0.75;
    transition: color 0.5s, width 0.5s, left 0.5s, right 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover:after,
  &:hover:before {
    width: 100%;
  }

  &:hover {
    color: #fff;
  }
`;
