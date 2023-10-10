import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: var(--headingsSecondFontSize);
  font-weight: ${props => (props.variant === 'text' ? '500' : '600')};
  line-height: var(--headingsSecondFontSize);

  color: ${props =>
    props.variant === 'text' ? 'var(--accentColor)' : 'var(--whiteColor)'};
  background-color: ${props =>
    props.variant === 'text' ? 'transparent' : 'var(--accentColor)'};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: ${props => (props.size === 'large' ? '20px 99px' : '17px 44px')};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.variant === 'text' ? 'transparent' : 'var(--hoverColor)'};
  }
`;

const Button = ({ type, children, variant, size, className, onClick }) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
