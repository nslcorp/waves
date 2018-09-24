import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from './utils';
import renderField from '../../../shared/render-form-field';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="signin_wrapper">
      <form onSubmit={handleSubmit}>
        <Field name="email" component={renderField} label="Enter your email..." />
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
