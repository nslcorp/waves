import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { InputFieldGroup } from '../../../../../../shared/form-field/index';

const AddCategory = props => {
  const { handleSubmit, submitting, name: categoryName } = props;

  const placeholder = `Enter ${categoryName} name..`;
  const buttonTitle = `Add ${categoryName}`;
  const fieldName = 'category-' + categoryName;
  return (
    <form onSubmit={handleSubmit}>
      <Field name={fieldName} component={InputFieldGroup} placeholder={placeholder} />
      <div>
        <button type="submit" disabled={submitting}>
          {buttonTitle}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (_, ownPros) => ({ form: `add-category-${ownPros.name}` });
const withConnect = connect(mapStateToProps);
const withForm = reduxForm();

export default compose(
  withConnect,
  withForm
)(AddCategory);
