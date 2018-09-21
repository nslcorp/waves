import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from './utils';

const renderField = ({ input, label, type = 'text', meta: { touched, error, warning } }) => (
  <div className="formBlock">
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="error_label">{error}</span>) ||
          (warning && <span className="error_label">{warning}</span>))}
    </div>
  </div>
);

const FIELDS = [
  { name: 'name', label: 'Enter your name' },
  { name: 'lastName', label: 'Enter your lastname' },
  { name: 'email', label: 'Enter your email' },
  { name: 'name', label: 'Enter your password' },
  { name: 'name', label: 'Confirm your password' }
];

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="signin_wrapper">
      <form onSubmit={handleSubmit}>
        {FIELDS.map(({ name, label }) => (
          <Field name={name} label={label} component={renderField} />
        ))}

        <div>
          <button type="submit" disabled={submitting}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {};

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm);
