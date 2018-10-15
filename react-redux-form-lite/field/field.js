import React, { Component, createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import FieldContext from './field-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
import { getValue } from '../utils/dom-helper';
import ReduxFormContext from '../redux-form/redux-form-context';
import FieldArrayContext from '../field-array/field-array-context';

class Field extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {
      name,
      actions: { registerField },
      formContext: { form },
      fieldArrayContext: { fieldName: fieldArrayName },
    } = this.props;

    registerField(form, name);
  }

  onChange = (e) => {
    const { onChange } = this.props;
    const value = getValue(e);

    if (onChange) {
      onChange(e);
    }

    const { actions: { change }, formContext: { form }, name } = this.props;
    change(form, name, value);
  };

  render() {
    const { component, ...props } = this.props;
    const meta = {};
    const input = {
      onChange: this.onChange,
    };
    return createElement(component, {
      ...props,
      meta,
      input,
    });
  }
}

Field.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  formContext: PropTypes.objectOf(PropTypes.any),
  fieldArrayContext: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
};

Field.defaultProps = {
  actions: {},
  formContext: {},
  fieldArrayContext: {},
  onChange: undefined,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const FieldConnected = connect(mapStateToProps, mapDispatchToProps)(Field);

const FieldWithContext = (props) => (
  <ReduxFormContext.Consumer>
    {(formContext) => (
      <FieldArrayContext.Consumer>
        {(fieldArrayContext) => (
          <FieldConnected
            {...props}
            formContext={formContext}
            fieldArrayContext={fieldArrayContext}
          />
        )}
      </FieldArrayContext.Consumer>
    )}
  </ReduxFormContext.Consumer>
);

export default FieldWithContext;
