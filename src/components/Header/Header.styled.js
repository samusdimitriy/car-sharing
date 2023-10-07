import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  color: ${props => props.theme.headingsSecondColor};
  padding: 12px;
  margin-bottom: 24px;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr 10.25rem;
  justify-items: center;
  align-items: center;
  gap: 0.9375rem;
  min-height: 3rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  max-width: ${props => props.theme.desktop};
  margin: 0 auto;
  padding: 0 0.9375rem;
`;

export const LogoIcon = styled.svg`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px;
  color: ${props => props.theme.headingsColor};
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s;

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
    background: ${props => props.theme.hoverColor};
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
  &:hover:before,
  &:focus:after,
  &:focus:before {
    width: 100%;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.whiteColor};

    > svg {
      fill: ${props => props.theme.whiteColor};
    }
  }
`;

export const AdditionDataList = styled.ul`
  text-align: start;

  .addition-data__link {
    position: relative;
    z-index: 1;
    display: block;
    width: fit-content;
    color: inherit;
    padding: 5px 0;
    transition: color 0.5s;

    &:after,
    &:before {
      transition: color 0.5s, width 0.5s, left 0.5s, right 0.5s;
    }

    &:after,
    &:before {
      content: ' ';
      position: absolute;
      z-index: -1;
      bottom: 2px;
      width: 0;
      height: 2px;
      margin: auto;
      border-radius: 4px;
      background: ${props => props.theme.hoverColor};
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
      color: ${props => props.theme.hoverColor};
    }
  }
`;
