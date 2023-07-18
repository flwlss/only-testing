import React from 'react'
import { useSwiper } from 'swiper/react'
import { Power1, gsap } from "gsap";

interface IMyButtonsProps {
  slideIndex: number;
  slidesLength: number;
}

const MySwiperButtons = (props: IMyButtonsProps) => {

  const swiper = useSwiper()

  const onPrevClick = () => {
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
    swiper.slidePrev()
  }

  const onNextClick = () => {
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
    swiper.slideNext()
  }

  return (
    <div className='swiperButtons'>
      <button
        disabled={props.slideIndex === 1}
        onClick={onPrevClick}
        className={props.slideIndex === 1 ? 'swiperButtons__left disabledSwiperButton' : 'swiperButtons__left'} />
      <button
        disabled={props.slideIndex === props.slidesLength}
        onClick={onNextClick}
        className={props.slideIndex === props.slidesLength ? 'swiperButtons__right disabledSwiperButton' : 'swiperButtons__right'} />
    </div>
  )
}

export default MySwiperButtons