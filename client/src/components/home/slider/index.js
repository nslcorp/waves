import React from 'react';
import PropTypes from 'prop-types';
import ReactSlick from 'react-slick';
import Button from '../../shared/button';
import Slide from './slide';

const slides = [
  {
    img: '/images/featured/featured_home.jpg',
    title: 'Fender',
    lowTitle: 'Custom shop',
    linkTitle: 'Shop now',
    to: '/shop'
  },
  {
    img: '/images/featured/featured_home_2.jpg',
    title: 'B-Stock',
    lowTitle: 'Awesome discounts',
    linkTitle: 'View offers',
    to: '/shop'
  }
];

const Slider = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="featured_container">
      <ReactSlick {...settings}>
        {slides.map(slide => (
          <Slide key={slide.title} {...slide} />
        ))}
      </ReactSlick>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
