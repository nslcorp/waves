import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from './utils';

const renderField = ({
  input,
  label,
  type = 'text',
  meta: { touched, error, warning }
}) => (
  <div className="formBlock">
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="error_label">{error}</span>) ||
          (warning && <span className="error_label">{warning}</span>))}
    </div>
  </div>
);

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="signin_wrapper">
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={renderField}
          label="Enter your email..."
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Enter your password..."
        />
        <div>
          <button type="submit" disabled={submitting}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
