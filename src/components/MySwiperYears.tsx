import React, { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";

interface IMySwiperYears {
  startValue: number;
  endValue: number;
}

const MySwiperYears = (props: IMySwiperYears) => {

  const startValueRef = useRef(null);
  const endValueRef = useRef(null);

  useEffect(() => {
    gsap.to(startValueRef.current, {
      duration: 0.5,
      innerText: props.startValue,
      ease: Power1.easeIn
    });
  }, [props.startValue]);

  useEffect(() => {
    gsap.to(endValueRef.current, {
      duration: 0.5,
      innerText: props.endValue,
      ease: Power1.easeIn
    });
  }, [props.endValue]);

  return (
    <div className='swiper__dateRangeWrapper'>
      <p
        ref={startValueRef}
        className='swiper__dateRange'>2015</p>
      <p
        style={{ color: '#EF5DA8' }}
        ref={endValueRef}
        className='swiper__dateRange'>2022</p>
    </div>
  )
}

export default MySwiperYears