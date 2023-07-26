import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IMySwiperYears {
  startValue: number;
  endValue: number;
}

const MySwiperYears = (props: IMySwiperYears) => {

  const startValueRef = useRef(null);
  const endValueRef = useRef(null);

  useEffect(() => {
    gsap.to(startValueRef.current, {
      duration: 1,
      innerHTML: props.startValue,
      snap: "innerHTML",
      ease: "expo.out",
    });
  }, [props.startValue]);

  useEffect(() => {
    gsap.to(endValueRef.current, {
      duration: 1,
      innerHTML: props.endValue,
      snap: "innerHTML",
      ease: "expo.out",
    });
  }, [props.endValue]);

  return (
    <div className='mySwiper__dateRangeWrapper'>
      <p
        ref={startValueRef}
        className='mySwiper__dateRange'>1990</p>
      <p
        style={{ color: '#EF5DA8' }}
        ref={endValueRef}
        className='mySwiper__dateRange'>1995</p>
    </div>
  )
}

export default MySwiperYears