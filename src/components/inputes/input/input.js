import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import style from '@styles/inputs/inpute.scss';

const Input = ({ type, input, meta, id, theme, className, placeHolder }) => (
  <div
    className={cx(style[`input-${theme}`], className, {
      [style[`input-${theme}-error`]]: Boolean(meta.error && meta.touched),
    })}
  >
    <input {...input} id={id} type={type} />
  </div>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  input: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default']),
  placeHolder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  input: {},
  className: '',
  theme: 'default',
  placeHolder: '',
};

export default Input;
