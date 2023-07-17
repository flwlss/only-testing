import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper'
import MySwiper from './MySwiper';
import MySwiperButtons from './MySwiperButtons';
import { myObject } from '../common/constants';

const MySwiperContainer = () => {

  const [slideIndex, setSlideIndex] = useState(1)
  const [sliderLength, setSliderLength] = useState(Object.keys(myObject).length)

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
        <p>{`${slideIndex.toString().padStart(2, '0')}/${sliderLength.toString().padStart(2, '0')}`}</p>
        <div>
          <Swiper
            speed={0}
            style={{ display: 'flex', flexDirection: 'column' }}
            onSlideChange={(item) => {
              setSlideIndex(item.activeIndex + 1)
            }}
            allowTouchMove={false}>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={myObject.array1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={myObject.array2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={myObject.array3} />
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