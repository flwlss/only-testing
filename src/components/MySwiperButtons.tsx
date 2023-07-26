import React from 'react'
import { useSwiper } from 'swiper/react'

interface IMyButtonsProps {
  slideIndex: number;
  slidesLength: number;
}

const MySwiperButtons = (props: IMyButtonsProps) => {

  const swiper = useSwiper()

  return (
    <div className='swiperButtons'>
      <button
        disabled={props.slideIndex === 1}
        onClick={() => {
          swiper.slidePrev()
        }}
        className={props.slideIndex === 1 ? 'swiperButtons__left disabledSwiperButton' : 'swiperButtons__left'} />
      <button
        disabled={props.slideIndex === props.slidesLength}
        onClick={() => {
          swiper.slideNext()
        }}
        className={props.slideIndex === props.slidesLength ? 'swiperButtons__right disabledSwiperButton' : 'swiperButtons__right'} />
    </div>
  )
}

export default MySwiperButtons