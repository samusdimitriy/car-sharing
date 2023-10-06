import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GrCatalog } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 130px;
    ${props =>
      props.path === '/' &&
      `
    padding: 0px 180px;
  `}
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #cacacd;
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000;
`;
const LogoImgContainer = styled.div`
  max-width: 60px;
`;
const StyledBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #3470ff;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
const Logo = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 36px;
  font-weight: 700;
`;

const NavContainer = styled.div`
  display: none;
  gap: 15px;
  font-family: 'Caveat', cursive;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 28px;
  }
`;
const SNavLink = styled(NavLink)`
  color: #000;
  svg {
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
    path {
      transition: stroke 350ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  &.active {
    position: relative;
    color: #0b44cd;
    svg {
      fill: #0b44cd;
      path {
        stroke: #0b44cd;
      }
    }
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: #0b44cd;
      bottom: 0;
      left: 0;
      transform: translateY(10px);
    }
  }
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
    svg {
      fill: #0b44cd;
      path {
        stroke: #0b44cd;
      }
    }
  }
  font-size: 38px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
const Catalog = styled(GrCatalog)`
  margin-right: 5px;
`;
const Favorite = styled(MdFavorite)`
  margin-right: 5px;
  fill: red;
`;
export {
  Container,
  LogoContainer,
  StyledBtn,
  HeaderContainer,
  Logo,
  Catalog,
  Favorite,
  LogoImgContainer,
  NavContainer,
  SNavLink,
};
