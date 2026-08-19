// TextSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function TextSlider({ items, speed = 2000 }) {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed,   // pause duration in ms
    arrows: false,
    pauseOnHover: true,
  };

  return (
      <Slider {...settings}>
        {items.map((item, i) => (
          <span key={i} className={item.className} style={{ height: 50, lineHeight: '50px', paddingLeft: 10 }}>
            {item.text}
          </span>
        ))}
      </Slider>
    
  );
}
