import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleFormBlock from '@blocks/simple-form';

class SimpleForm extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <SimpleFormBlock onSumbit={this.onSubmit} />
    );
  }
}

SimpleForm.propTypes = {};

SimpleForm.defaultProps = {};

export default SimpleForm;
