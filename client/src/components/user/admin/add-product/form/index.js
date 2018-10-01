import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {
  InputFieldGroup,
  SelectFieldGroup,
  TextAreaFieldGroup,
  FileUploader
} from '../../../../shared/form-field';
import { options } from './constants';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const AddProductForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="image" component={FileUploader} />
      <Field
        name="name"
        label="Name"
        placeholder="Enter product name..."
        component={InputFieldGroup}
      />
      <Field
        name="description"
        label="Description"
        rows={5}
        placeholder="Enter product description..."
        component={TextAreaFieldGroup}
      />
      <Field
        type="number"
        name="price"
        label="Price"
        placeholder="Enter product price..."
        component={InputFieldGroup}
      />
      <div className="form_devider" />

      <Field name="brand" label="Brand" component={SelectFieldGroup} options={[]} />
      <Field
        name="shipping"
        label="Shipping"
        component={SelectFieldGroup}
        options={options.shipping}
      />
      <Field
        name="available"
        label="Available, in stock"
        component={SelectFieldGroup}
        options={options.available}
      />
      <div className="form_devider" />

      <Field name="wood" label="Wood material" component={SelectFieldGroup} options={props.wood} />
      <Field name="frets" label="Frets" component={SelectFieldGroup} options={props.brand} />
      <div className="form_devider" />

      <Field name="frets" label="Publish" component={SelectFieldGroup} options={options.publish} />

      <div>
        <button type="submit" disabled={submitting}>
          Add Product
        </button>
      </div>
    </form>
  );
};

AddProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  wood: PropTypes.arrayOf(PropTypes.shape).isRequired,
  brand: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default reduxForm({
  form: 'add-product'
})(AddProductForm);
