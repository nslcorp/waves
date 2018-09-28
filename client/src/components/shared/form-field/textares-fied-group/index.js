import React from 'react';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({ input, rows, label, placeholder, meta: { touched, error } }) => {
  return (
    <div className="formBlock">
      {label && <div className="label_inputs">{label}</div>}
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched && error && <div className="error_label">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  meta: PropTypes.shape().isRequired
};

export default TextAreaFieldGroup;
