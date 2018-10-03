import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SelectFieldGroup = props => {
  const {
    input,
    label,
    options,
    meta: { touched, error }
  } = props;

  const selectOptions = options.map(option => (
    <option key={option.key} value={option.key}>
      {option.value}
    </option>
  ));

  return (
    <div className="formBlock">
      {label && <div className="label_inputs">{label}</div>}
      <select {...input}>
        <option value="">Select one</option>
        {selectOptions}
      </select>
      {touched && error && <div className="error_label">{error}</div>}
    </div>
  );
};

SelectFieldGroup.propTypes = {
  input: PropTypes.shape().isRequired,
  info: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.shape().isRequired
};

export default SelectFieldGroup;
