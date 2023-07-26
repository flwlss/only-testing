import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MySwiper from './MySwiper';
import MySwiperButtons from './MySwiperButtons';
import { keyEvents, keyEventsLength, themes } from '../common/constants';
import MySwiperYears from './MySwiperYears';
import MySwiperPagination from './MySwiperPagination';
import { Pagination } from 'swiper';
import { Power1, gsap } from "gsap";
import { rotateAnimation } from '../common/animations';

const MySwiperContainer = () => {

  const [slideIndex, setSlideIndex] = useState(1)
  const [sliderLength, setSliderLength] = useState(keyEventsLength)
  const [startValue, setStartValue] = useState(1990)
  const [endValue, setEndValue] = useState(1995)

  useEffect(() => {
    switch (slideIndex) {
      case 1:
        setStartValue(1990)
        setEndValue(1995)
        break;
      case 2:
        setStartValue(2015)
        setEndValue(2020)
        break;
      case 3:
        setStartValue(1975)
        setEndValue(1985)
        break;
      case 4:
        setStartValue(2000)
        setEndValue(2010)
        break;
      case 5:
        setStartValue(1930)
        setEndValue(1950)
        break;
      case 6:
        setStartValue(1830)
        setEndValue(1890)
        break;
    }
  }, [startValue, endValue, slideIndex])

  useEffect(() => {
    const rotateDeg = 360 / keyEventsLength * (-slideIndex + 1) - (360 / keyEventsLength)
    gsap.to('.circlePagination', { transform: `rotate(${rotateDeg}deg)`, duration: 0 })
    const tm = setTimeout(() => {
      rotateAnimation(slideIndex)
    }, 0);
    return () => { clearTimeout(tm) }
  }, [])

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper, .mySwiper__theme', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
    rotateAnimation(slideIndex)
  }, [slideIndex])

  return (
    <div className='mySwiper'>
      <div>
        <h1 className='mySwiper__title'>Исторические даты</h1>
        <MySwiperYears
          startValue={startValue}
          endValue={endValue} />
      </div>
      <p className='mySwiper__theme'>{themes(slideIndex)}</p>
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
                <MySwiper keyEvents={keyEvents.keyEvent1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={keyEvents.keyEvent2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={keyEvents.keyEvent3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={keyEvents.keyEvent4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={keyEvents.keyEvent5} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <MySwiper keyEvents={keyEvents.keyEvent6} />
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