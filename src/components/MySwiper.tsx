import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'

type MySwiper = {
  year: string;
  text: string;
}

interface IMySwiperProps {
  keyEvents: MySwiper[]
}

const MySwiper = (props: IMySwiperProps) => {
  return (
    <Swiper
      className='mySwiper'
      slidesPerView={3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation={true}
      grabCursor={true}>
      {props.keyEvents.map((item, index) => {
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