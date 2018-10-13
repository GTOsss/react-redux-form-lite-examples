import React from 'react';
import PropTypes from 'prop-types';
import stylePage from '@styles/page.scss';
import { Input, Button } from '@components/inputes';
import { FieldArray, Field, reduxForm } from '../../../react-redux-form-lite';

const User = ({ fieldArrayName }) => (
  <div style={{ marginTop: '20px' }}>
    <Field name={`${fieldArrayName}.firstName`} component={Input} />
    <Field name={`${fieldArrayName}.lastName`} component={Input} />
  </div>
);

const Users = ({ fields }) => (
  <div>
    {fields.map((el) => (<User fieldArrayName={el} />))}
    <Button>Add user</Button>
  </div>
);

const SimpleForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className={stylePage.pageDefault}>
    <h2>Simple Form</h2>
    <Field name="section" component={Input} />
    <FieldArray name="users" component={Users} />
    <Button>Submit</Button>
  </form>
);

SimpleForm.propTypes = {
  handleSubmit: PropTypes.func,
};

SimpleForm.defaultProps = {
  handleSubmit: null,
};

const Form = reduxForm({ form: 'SimpleForm' })(SimpleForm);

export default Form;
