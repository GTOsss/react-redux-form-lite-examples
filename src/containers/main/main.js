import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePage from '@styles/page.scss';

class Main extends Component {
  render() {
    return (
      <section className={stylePage.pageDefault}>
        <h1>
          react-redux-form-lite examples
        </h1>
      </section>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
