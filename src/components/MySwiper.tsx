import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const MySwiper = () => {

  return (
    <div>
      <h1 className='swiper__title'>Исторические даты</h1>
      <Swiper>
        <SwiperSlide>
          <div>
            <p className='swiper__dateRange'>2015 2022</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper