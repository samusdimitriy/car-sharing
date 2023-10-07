import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = props => {
  const {
    type = 'button',
    children = 'Button',
    variant = 'contained',
    size = 'small',
    className,
    onClick,
  } = props;

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

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
