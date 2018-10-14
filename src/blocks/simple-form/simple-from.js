import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import stylePage from '@styles/page.scss';
import { Input, Button } from '@components/inputes';
import { FieldArray, Field, reduxForm } from '../../../react-redux-form-lite';

const Hobby = ({ fieldArrayName }) => (
  <Field name={`${fieldArrayName}.hobbyName`} component={Input} />
);

const Hobbies = ({ fields }) => (
  <div style={{ backgroundColor: 'green' }}>
    {fields.map((el, i, array) => <Hobby fieldArrayName={el} key={array[i].id} />)}
    <Button onClick={() => fields.push({ id: shortid.generate() })}>Add hobby</Button>
  </div>
);

const User = ({ fieldArrayName }) => (
  <div style={{ marginTop: '20px' }}>
    <Field name={`${fieldArrayName}.firstName`} component={Input} />
    <Field name={`${fieldArrayName}.lastName`} component={Input} />
    <FieldArray name={`${fieldArrayName}.hobbies`} component={Hobbies} />
  </div>
);

const Users = ({ fields }) => (
  <div>
    {fields.map((name, i, array) => (<User key={array[i].id} fieldArrayName={name} />))}
    <Button onClick={() => fields.push({ id: shortid.generate() })}>Add user</Button>
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
