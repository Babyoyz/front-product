'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


type Props = {
  images: Array<string>;
}
 const Carousel: React.FC<Props> = ({images}) => {
    return (
    <Swiper
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
