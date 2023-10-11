import React from 'react';
import styled from 'styled-components';
import AchivmentUnderline from 'images/icons/AchivmentUnderline';
import carImg from 'images/car_about.png';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 24px;
  padding: 24px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 24px;
  background-color: #eff0f0;
  border-radius: 24px;
  overflow: hidden;

  & > img {
    border-radius: 12px;
  }
`;

const DescWrapper = styled.div`
  display: grid;
  height: 100%;
`;

const Description = styled.p`
  font-size: var(--standardSize);
  line-height: 1.6;
  margin-top: 12px;
  color: var(--descColor);
`;

const AchievementList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 24px;

  & > li {
    text-align: center;
    font-size: 34px;
    font-weight: 600;
    line-height: 0.5;
    padding: 12px 0;
    width: 9rem;

    & > span {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--headingsSecondColor);
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <DescWrapper>
        <Description>
          We have a huge sales area of more than 5000 square metres, we have at
          least 200 cars of both domestic and foreign production in stock. The
          staff of the Altera car dealership are real professionals who know the
          peculiarities of each particular car.
        </Description>
        <AchievementList>
          <li>
            150
            <AchivmentUnderline />
            <span>Vehicle In Stock</span>
          </li>
          <li>
            40
            <AchivmentUnderline />
            <span>Rental Car</span>
          </li>
          <li>
            38
            <AchivmentUnderline />
            <span>Happy Customer</span>
          </li>
          <li>
            5
            <AchivmentUnderline />
            <span>Awards</span>
          </li>
        </AchievementList>
      </DescWrapper>
      <img src={carImg} alt="Car" />
    </AboutContainer>
  );
};

export default About;
