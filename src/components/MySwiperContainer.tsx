import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { keyEvents } from '../common/constants';
import { EffectFade, Navigation, Pagination } from 'swiper'
import MySwiper from './MySwiper';
import MySwiperButtons from './MySwiperButtons';

const MySwiperContainer = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div>
        <h1 className='swiper__title'>Исторические даты</h1>
        <div className='swiper__dateRangeWrapper'>
          <p className='swiper__dateRange'>2015</p>
          <p style={{ color: '#EF5DA8' }} className='swiper__dateRange'>2025</p>
        </div>
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <p>{`0${slideIndex}/06`}</p>
        <div>
          <Swiper
            style={{ display: 'flex', flexDirection: 'column' }}
            onSlideChange={(item) => {
              setSlideIndex(item.activeIndex + 1)
            }}
            allowTouchMove={false}>
            <SwiperSlide>
              <div>
                <MySwiper />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper />
              </div>
            </SwiperSlide>
            <MySwiperButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MySwiperContainer