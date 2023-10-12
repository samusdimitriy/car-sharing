import styled from 'styled-components';

export const InputFromToFieldList = styled.div`
  display: inline-grid;
  gap: 8px;
  width: 320px;
  font-size: var(--headingsSecondFontSize);
  font-weight: 500;
  line-height: 1.28;
  color: var(--headingsSecondColor);
`;

export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 320px;
  border-radius: 14px;
  overflow: hidden;
`;

export const InputFromToWrapper = styled.div`
  position: relative;
  display: flex;
  color: var(--headingsColor);
  font-size: 18px;
  line-height: 1.11;
  width: 160px;
  height: 48px;

  label,
  .input__from,
  .input__to {
    white-space: nowrap;
    display: block;
  }

  label {
    position: absolute;
    top: 14px;
    left: 24px;
    color: inherit;
  }

  input {
    display: block;
    width: 100%;
    padding: 14px 24px;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    --webkit-appearance: none;
    color: inherit;
    background-color: var(--bgSecondColor);
    border: 1px solid var(--bgSecondColor);

    &.input__from {
      padding-left: 70px;
      border-right: 1px solid var(--borderSecondColor);
    }

    &.input__to {
      padding-left: 48px;
    }

    &:focus {
      outline: none;
    }
  }
`;
