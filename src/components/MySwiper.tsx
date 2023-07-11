import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { keyEvents } from '../common/constants';
import { Navigation } from 'swiper'

const MySwiper = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <div>
        <h1 className='swiper__title'>Исторические даты</h1>
        <div className='swiper__dateRangeWrapper'>
          <p className='swiper__dateRange'>2015</p>
          <p style={{ color: '#EF5DA8' }} className='swiper__dateRange'>2025</p>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          grabCursor={true}
          freeMode={true}>
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
      </div>
    </div>
  );
}

export default MySwiper