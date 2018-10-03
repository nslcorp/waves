import React from 'react';

const InputFieldGroup = ({
  input,
  label,
  placeholder,
  type = 'text',
  meta: { touched, error }
}) => (
  <div className="formBlock">
    {label && <div className="label_inputs">{label}</div>}
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <div className="error_label">{error}</div>}
  </div>
);

export default InputFieldGroup;
