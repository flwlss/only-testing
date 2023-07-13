import React from 'react'
import { useSwiper } from 'swiper/react'

const MySwiperButtons = () => {

  const swiper = useSwiper()

  return (
    <div className='swiperButtons'>
      <button onClick={() => { swiper.slidePrev() }} className='swiperButtons__left' />
      <button onClick={() => { swiper.slideNext() }} className='swiperButtons__right'></button>
    </div>
  )
}

export default MySwiperButtons