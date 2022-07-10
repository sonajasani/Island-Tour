import { useState } from 'react';

import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './ImageSlider.css'

function ImageSlider({resort}) {
  const [current, setCurrent] = useState(0);
  const length = resort.images.length;
  const images = resort.images

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="slider">
      <MdArrowBackIos onClick={prevSlide} className="left-clicker"/>
      <MdArrowForwardIos onClick={nextSlide} className="right-clicker" />
      {images.map((image, idx) => (
        <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
          {idx === current && (
            <img src={image.url} alt={image.url} key={idx} />
            )}
        </div>
      ))}
    </div>
  )
}

export default ImageSlider;
