import styled from 'styled-components';

export const StyledDescriptionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--descColor);
  width: fit-content;

  & > li {
    &:not(:last-child) {
      padding-right: 6px;
      margin-right: 6px;
      border-right: 1px solid var(--borderColor);
    }
  }

  &.small {
    max-width: 274px;
  }

  &.medium {
    max-width: 280px;
  }

  &.large {
    max-width: 100%;
  }
`;
