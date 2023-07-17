import React, { useEffect, useState } from "react";

interface IMySwiperYears {
  slideIndex: number
}

const MySwiperYears = (props: IMySwiperYears) => {

  const [start, setStart] = useState('2015')
  const [end, setEnd] = useState('2022')

  useEffect(() => {
    switch (props.slideIndex) {
      case 1:
        setStart('2015')
        setEnd('2022')
        break;
      case 2:
        setStart('2030')
        setEnd('2040')
        break;
      case 3:
        setStart('1999')
        setEnd('2005')
        break;
    }
  }, [props.slideIndex])

  return (
    <div className='swiper__dateRangeWrapper'>
      <p className='swiper__dateRange'>{start}</p>
      <p style={{ color: '#EF5DA8' }} className='swiper__dateRange'>{end}</p>
    </div>
  )
}

export default MySwiperYears