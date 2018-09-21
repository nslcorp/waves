export const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.email = 'Required';
  } else if (values.password.length < 4) {
    errors.password = 'password must be 4 chars and more';
  }

  return errors;
};
