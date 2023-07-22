import React, { useEffect, useRef, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { myObject } from '../common/constants';
import { Power1, gsap } from "gsap";

interface IMySwiperPaginationProps {
  slideIndex: number;
}

const MySwiperPagination = (props: IMySwiperPaginationProps) => {

  const circleRef = useRef<HTMLDivElement>(null);
  const circleWrapperRef = useRef<HTMLDivElement>(null);
  const swiper = useSwiper()
  const [sliderLength, setSliderLength] = useState(Object.keys(myObject).length)
  const [rotate, setRotate] = useState(0)

  const selectSlide = (dotId: number) => {
    swiper.slideTo(dotId)
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
  }

  useEffect(() => {
    const tm = setTimeout(() => {
      gsap.to('.circlePagination__dot', { scale: 0.1, duration: 0, background: '#42567A', transform: `rotate(${-rotate}deg)` })
      gsap.to(`.circlePagination__dot:nth-child(${props.slideIndex})`, { scale: 1, border: '1px solid rgba(48, 62, 88, 0.5)', background: '#F4F5F9', duration: 0 })
    }, 0);
    return () => clearTimeout(tm)
  }, [props.slideIndex, rotate])

  useEffect(() => {
    const circle = circleRef.current;
    const wrapper = circleWrapperRef.current;
    if (circle && wrapper) {
      const radius = 265;
      const dotsCount = sliderLength; // количество точек
      const angleStep = (2 * Math.PI) / dotsCount; // шаг угла
      const dotSpacing = radius; // расстояние между точками

      if (wrapper.hasChildNodes()) {
        wrapper.innerHTML = '';
      }

      for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.innerHTML = `<p>${i + 1}</p>`
        dot.id = `${i}`;
        dot.className = 'circlePagination__dot'

        const angle = i * angleStep;
        const x = radius + dotSpacing * Math.cos(angle);
        const y = radius + dotSpacing * Math.sin(angle);

        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;

        circle.appendChild(wrapper);
        wrapper.appendChild(dot)

        const rotateDeg = 360 / dotsCount * -dot.id

        dot.addEventListener('click', () => {
          selectSlide(+dot.id)
          setRotate(rotateDeg)
          gsap.to('.circlePagination', { transform: `rotate(${rotateDeg}deg)` })
          gsap.to(dot, { transform: `rotate(${-rotateDeg}deg)` })
        })

        if (props.slideIndex !== +dot.id + 1) {
          dot.addEventListener("mouseenter",
            () => gsap.to(dot,
              { scale: 1, border: '1px solid rgba(48, 62, 88, 0.5)', background: '#F4F5F9' }
            ));

          dot.addEventListener("mouseleave",
            () => gsap.to(dot,
              { scale: 0.1, border: 'none', background: '#42567A' }
            ));
        }
      }
    }
  }, [swiper, props.slideIndex]);

  return (
    <div
      className='circlePagination'
      ref={circleRef}
    >
      <div
        className='circlePagination__wrapper'
        ref={circleWrapperRef} />
      {/* точки добавляются динамически через useEffect */}
    </div>
  );
};

export default MySwiperPagination;