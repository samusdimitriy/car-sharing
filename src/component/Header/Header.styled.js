import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  color: var(--headingsSecondColor);
  padding: 12px;
  margin-bottom: 54px;
  border-bottom: 1px solid var(--headingsSecondColor);

  .header__container {
    display: grid;
    grid-template-columns: 6.5rem 1fr 10.25rem;
    justify-items: center;
    align-items: center;
    gap: 0.9375rem;

    max-width: var(--desktop);
    margin: 0 auto;
    padding: 0 5rem;
  }
`;

export const HeaderLogo = styled(NavLink)`
  width: 200px;
  height: 150px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const DataList = styled.ul`
  text-align: start;
`;

export const DataLink = styled.a`
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