import styled from 'styled-components';

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ChipItem = styled.li`
  line-height: 1.5;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  color: var(--blackColor);
  background-color: var(--bgSecondColor);
  border-radius: 39px;

  & > span {
    font-weight: 600;
    color: var(--accentColor);
  }
`;
