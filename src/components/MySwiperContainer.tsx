import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import MySwiper from './MySwiper';
import MySwiperButtons from './MySwiperButtons';
import { myObject } from '../common/constants';
import MySwiperYears from './MySwiperYears';

const MySwiperContainer = () => {

  const [slideIndex, setSlideIndex] = useState(1)
  const [sliderLength, setSliderLength] = useState(Object.keys(myObject).length)
  const [startValue, setStartValue] = useState(2015)
  const [endValue, setEndValue] = useState(2022)

  useEffect(() => {
    switch (slideIndex) {
      case 1:
        setStartValue(2015)
        setEndValue(2022)
        break;
      case 2:
        setStartValue(1999)
        setEndValue(2005)
        break;
      case 3:
        setStartValue(2010)
        setEndValue(2030)
        break;
    }
  }, [startValue, endValue, slideIndex])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div>
        <h1 className='swiper__title'>Исторические даты</h1>
        <MySwiperYears
          startValue={startValue}
          endValue={endValue} />
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <p>{`${slideIndex.toString().padStart(2, '0')}/${sliderLength.toString().padStart(2, '0')}`}</p>
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
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
            <MySwiperButtons
              slideIndex={slideIndex}
              slidesLength={sliderLength} />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MySwiperContainer