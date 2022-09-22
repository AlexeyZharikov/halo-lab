import React from 'react';
import './slider.scss';
import images from '../../assets/images';
import SliderItem from './sliderItem/sliderItem.component';
// import TinySlider from "tiny-slider-react";
// import 'tiny-slider/dist/tiny-slider.css';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 3,
  lidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 3000,
  // infinite: true,
  arrows: false
};

const sliderArr = images
  .slider
  .map(item => <SliderItem src={item.card} key={item.id}/>);
  
const Carousel = () => {
  
  return (
    <div className="sdr">
        <Slider {...settings}>{sliderArr}</Slider>
     </div>
  )
}


export default Carousel;
