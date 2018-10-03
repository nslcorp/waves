import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import { doRemoveImage, doUploadImage } from '../../../components/user/actions';
// import CircularProgress from '@material-ui/core/CircularProgress';

class FileUploader extends Component {
  state = {
    files: []
  };

  showUploadedImages = () => {
    const { input, meta } = this.props;

    if (!input.value.length) return null;

    return this.props.input.value.map(file => (
      <div
        className="dropzone_box"
        key={file.public_id}
        onClick={() => meta.dispatch(doRemoveImage(file.public_id, input.value))}
      >
        <div className="wrap" style={{ background: `url(${file.url}) no-repeat` }} />
      </div>
    ));
  };

  render() {
    const { input, label, meta } = this.props;
    return (
      <section>
        <div className="dropzone clear">
          <Dropzone
            onDrop={currFiles => meta.dispatch(doUploadImage(currFiles, input.value))}
            multiple={false}
            className="dropzone_box"
          >
            <div className="wrap">
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>
          </Dropzone>
          {this.showUploadedImages()}
        </div>
        {label && <div className="label_inputs">{label}</div>}
        {meta.touched && meta.error && <div className="error_label">{meta.error}</div>}
      </section>
    );
  }
}

FileUploader.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  meta: PropTypes.shape().isRequired
};

export default FileUploader;
