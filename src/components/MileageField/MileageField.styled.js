import styled from 'styled-components';

export const FromToFieldGroup = styled.div`
  display: inline-grid;
  gap: 8px;
  width: 320px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #8a8a89;
`;

export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 320px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  color: #121417;
  font-size: 18px;
  line-height: 1.11;
  width: 160px;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 24px;
  color: inherit;

  .input__from,
  .input__to {
    white-space: nowrap;
    display: block;
  }
`;

export const Input = styled.input`
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
  background-color: #f7f7fb;
  border: 1px solid #f7f7fb;

  &.input__from {
    padding-left: 70px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  &.input__to {
    padding-left: 48px;
  }

  &:focus {
    outline: none;
  }
`;
