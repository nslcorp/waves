import React, { Component } from 'react';
import ImageLightBox from './image-light-box';
import Thumb from './thumb';

const mainImgStyle = (images = []) => ({
  background: `url(${
    images.length > 0 ? images[0].url : '/images/image_not_availble.png'
  }) no-repeat`
});

class ImageSection extends Component {
  state = {
    lightbox: false,
    imagePos: 0,
    lightboxImages: []
  };

  componentDidMount() {
    if (this.props.detail.images.length > 0) {
      let lightboxImages = [];

      this.props.detail.images.forEach(item => {
        lightboxImages.push(item.url);
      });

      this.setState({
        lightboxImages
      });
    }
  }

  handleLightBox = pos => {
    if (this.state.lightboxImages.length > 0) {
      this.setState({
        lightbox: true,
        imagePos: pos
      });
    }
  };

  handleLightBoxClose = () => this.setState({ lightbox: false });

  handleLightBox = position => this.setState({ lightbox: true, imagePos: position });

  render() {
    const { detail } = this.props;

    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={mainImgStyle(this.props.detail.images)}
            onClick={() => this.handleLightBox(0)}
          />
        </div>
        <div className="main_thumbs">
          {this.state.lightboxImages.map(
            (image, i) => i > 0 && <Thumb onClick={() => this.handleLightBox(i)} image={image} />
          )}
        </div>
        {this.state.lightbox ? (
          <ImageLightBox
            id={detail.id}
            images={this.state.lightboxImages}
            open={this.state.open}
            pos={this.state.imagePos}
            onclose={() => this.handleLightBoxClose()}
          />
        ) : null}
      </div>
    );
  }
}

export default ImageSection;
