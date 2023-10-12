import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  padding: 0 24px 24px;
  width: 462px;
  color: var(--headingsColor);
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  margin-bottom: -10px;
  border-radius: 14px;
`;

export const CarTitle = styled.div`
  h3 {
    font-size: var(--headingsFontSize);
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    span {
      color: var(--accentColor);
    }
  }

  ul {
    margin-bottom: 14px;
  }

  p {
    font-size: var(--headingsSecondFontSize);
    font-weight: 400;
    line-height: 1.42;
  }
`;

export const Accessories = styled.div`
  h4 {
    font-size: var(--headingsSecondFontSize);
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
  }

  div {
    display: grid;
    gap: 4px;
  }
`;

export const RentalConditions = styled.div`
  h4 {
    font-size: var(--headingsSecondFontSize);
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
  }
`;

export const RentalButton = styled.a`
  width: fit-content;
  font-size: var(--headingsSecondFontSize);
  font-weight: 600;
  line-height: 1.42;
  color: var(--whiteColor);
  background-color: var(--accentColor);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 12px 50px;
  transition: background-color 0.5s;

  &:hover,
  &:focus {
    background-color: var(--hoverColor);
  }
`;
