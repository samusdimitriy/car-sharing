import Button from 'component/kit/Button/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: start;
  gap: 24px;
  padding-left: 44px;
  margin-left: 12px;
  margin-right: 12px;
  height: 600px;
  width: 100%;
  border-radius: 24px;
  background-image: url(../../images/hero__bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 600px;
  padding: 60px 128px;

  h1 {
    font-size: 60px;
    font-weight: 700;
    width: 80%;
    color: ${props => props.theme.headingsColor};
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Treat yourself to something special this weekend...</h1>
      <NavLink to="/catalog">
        <Button>View all cars</Button>
      </NavLink>
    </HeroContainer>
  );
};

export default Hero;
