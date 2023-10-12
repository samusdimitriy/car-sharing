import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-grid;
  gap: 8px;
  height: 74px;
`;

export const Label = styled.p`
  color: var(--headingsSecondColor);
  font-size: var(--headingsSecondFontSize);
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

export const Header = styled.div`
  position: relative;
  z-index: 0;
  color: var(--headingsColor);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  padding: 14px 18px;
  background-color: var(--bgSecondColor);
  border-radius: 14px;

  & > svg {
    position: absolute;
    top: 14px;
    right: 18px;
    stroke: var(--headingsColor);
  }
`;

export const SelectInput = styled.input`
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 4px;
  padding: 14px 8px 14px 18px;
  height: 272px;
  overflow-y: scroll;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: var(--bgColor);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
  background: var(--bgColor);
`;

export const Item = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-size: var(--standardSize);
  font-weight: 500;
  line-height: 1.25;
  background-color: var(--bgColor);
  cursor: pointer;

  &:hover,
  &:focus {
    color: inherit;
  }
`;
