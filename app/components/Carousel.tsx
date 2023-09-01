"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  images: Array<string>;
};

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={`${image}`} alt={`Slide ${index}`}
           width={1800}
           height={1390}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
