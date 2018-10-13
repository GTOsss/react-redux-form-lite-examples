import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Navbar, Link } from '@components/navbar';
import SimpleForm from '@containers/simple-form';
import Main from './main';

class MainRoute extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/simple-form">Simple Form</Link>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/simple-form" component={SimpleForm} />
        </Switch>
      </Fragment>
    );
  }
}

MainRoute.propTypes = {

};

MainRoute.defaultProps = {

};

export default withRouter(MainRoute);
