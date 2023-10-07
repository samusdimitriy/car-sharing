import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${props => props.theme.headingsSecondFontSize};
  font-weight: 600;
  line-height: 1.42;
  color: ${props => props.theme.whiteColor};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  ${props =>
    props.size === 'large' ? 'padding: 12px 99px;' : 'padding: 12px 50px;'}

  ${props =>
    props.variant === 'text'
      ? `
        font-size: ${props.theme.standartSize};
        font-weight: 500;
        line-height: 1.5;
        text-decoration-line: underline;
        color: ${props.theme.accentColor};
        background-color: transparent;
        padding: 0;
        border: none;
      `
      : `
        background-color: ${props.theme.accentColor};
      `}

  &:hover,
  &:focus {
    background-color: ${props => props.theme.hoverColor};
  }

  ${props =>
    props.variant === 'text'
      ? `
        &:hover,
        &:focus {
          color: ${props.theme.hoverColor};
          background-color: transparent;
        }
      `
      : ''}
`;
