import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MySwiper from './MySwiper';
import MySwiperButtons from './MySwiperButtons';
import { myObject } from '../common/constants';
import MySwiperYears from './MySwiperYears';
import MySwiperPagination from './MySwiperPagination';
import { Pagination } from 'swiper';
import { Power1, gsap } from "gsap";

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

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
  }, [slideIndex])

  return (
    <div className='mySwiper'>
      <div>
        <h1 className='mySwiper__title'>Исторические даты</h1>
        <MySwiperYears
          startValue={startValue}
          endValue={endValue} />
      </div>
      <div className='mySwiper__container'>
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            speed={0}
            style={{ display: 'flex', flexDirection: 'column', position: 'initial' }}
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
            <div style={{ marginTop: 20 }}>
              <p className='mySwiper__slides'>{`${slideIndex.toString().padStart(2, '0')}/${sliderLength.toString().padStart(2, '0')}`}</p>
              <MySwiperButtons
                slideIndex={slideIndex}
                slidesLength={sliderLength} />
            </div>
            <MySwiperPagination slideIndex={slideIndex} />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MySwiperContainer