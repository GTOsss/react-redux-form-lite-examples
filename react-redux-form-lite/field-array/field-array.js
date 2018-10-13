import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import FieldArrayContext from './field-array-context';

class FieldArray extends Component {
  render() {
    const { component, name, ...props } = this.props;
    const meta = {};
    const fieldArrayContext = {
      fieldName: name,
    };
    return (
      <FieldArrayContext.Provider value={fieldArrayContext}>
        {createElement(component, { ...props, meta, fields: [] })}
      </FieldArrayContext.Provider>
    );
  }
}

FieldArray.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  name: PropTypes.string,
};

FieldArray.defaultProps = {
  name: '',
};

export default FieldArray;
