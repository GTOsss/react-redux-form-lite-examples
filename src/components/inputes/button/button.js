import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children, onClick }) => (
  <button // eslint-disable-line
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  children: '',
  onClick: null,
};

export default Button;
