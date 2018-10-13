import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from '@styles/navbar/link.scss';

const Link = ({ exact, children, to }) => (
  <NavLink
    exact={exact}
    className={style.link}
    activeClassName={style.linkActive}
    to={to}
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  exact: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  exact: true,
  children: '',
};

export default Link;
