import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '@styles/navbar/navbar.scss';

const Navbar = ({ children }) => (
  <nav className={style.navbar}>
    {children}
  </nav>
);

Navbar.propTypes = {
  children: PropTypes.node,
};

Navbar.defaultProps = {
  children: '',
};

export default Navbar;
