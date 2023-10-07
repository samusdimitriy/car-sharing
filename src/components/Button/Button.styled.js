import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  ${props =>
    props.size === 'large' ? 'padding: 12px 99px;' : 'padding: 12px 50px;'}

  ${props =>
    props.variant === 'text'
      ? `
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        text-decoration-line: underline;
        color: #3470ff;
        background-color: transparent;
        padding: 0;
        border: none;
      `
      : `
        background-color: #3470ff;
      `}

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  ${props =>
    props.variant === 'text'
      ? `
        &:hover,
        &:focus {
          color: #0B44CD;
          background-color: transparent;
        }
      `
      : ''}
`;
