import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { keyEvents } from '../common/constants';
import { Navigation } from 'swiper'

const MySwiper = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation={true}
      grabCursor={true}>
      {keyEvents.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div style={{ paddingRight: 80 }} >
              <p className='swiper__year'>{item.year}</p>
              <p className='swiper__text'>{item.text}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MySwiper