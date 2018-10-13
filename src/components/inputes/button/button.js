import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children }) => (
  <button // eslint-disable-line
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  children: '',
};

export default Button;
