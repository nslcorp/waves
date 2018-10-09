import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from './utils';
import renderField from '../../../../shared/form-field/input-field-group/index';

const RegisterForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="signin_wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Personal information</h2>
        <Field name="name" label="Enter your name" component={renderField} />
        <Field name="lastName" label="Enter your lastname" component={renderField} />
        <Field name="email" label="Enter your email" component={renderField} />

        <h2>Account information</h2>
        <Field
          name="password"
          type="password"
          label="Enter your password"
          component={renderField}
        />
        <Field
          name="password2"
          type="password"
          label="Confirm your password"
          component={renderField}
        />

        <div>
          <button type="submit" disabled={submitting}>
            Register
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
