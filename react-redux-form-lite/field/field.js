import React, { Component, createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import FieldContext from './field-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
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
    } = this.props;
    registerField(form, name);
  }

  render() {
    const { component, ...props } = this.props;
    const meta = {};
    return createElement(component, { ...props, meta });
  }
}

Field.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  formContext: PropTypes.objectOf(PropTypes.any),
};

Field.defaultProps = {
  actions: {},
  formContext: {},
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const FieldWithContext = (props) => (
  <ReduxFormContext.Consumer>
    {(formContext) => (
      <FieldArrayContext.Consumer>
        {(fieldArrayContext) => (
          <Field
            {...props}
            formContext={formContext}
            fieldArrayContext={fieldArrayContext}
          />
        )}
      </FieldArrayContext.Consumer>
    )}
  </ReduxFormContext.Consumer>
);

export default connect(mapStateToProps, mapDispatchToProps)(FieldWithContext);
