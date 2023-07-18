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
      className='myNestedSwiper'
      slidesPerView={3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation={true}
      grabCursor={true}>
      {props.keyEvents.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='mySwiper__dataWrapper'>
              <p className='mySwiper__year'>{item.year}</p>
              <p className='mySwiper__text'>{item.text}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MySwiper