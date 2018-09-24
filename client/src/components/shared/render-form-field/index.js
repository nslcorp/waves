import React from 'react';

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

export default renderField;
