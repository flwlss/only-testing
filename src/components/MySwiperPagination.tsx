import React, { useEffect, useRef, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { myObject } from '../common/constants';
import { Power1, gsap } from "gsap";

const MySwiperPagination = () => {

  const circleRef = useRef<HTMLDivElement>(null);
  const circleWrapperRef = useRef<HTMLDivElement>(null);
  const swiper = useSwiper()
  const [sliderLength, setSliderLength] = useState(Object.keys(myObject).length)

  const selectSlide = (dotId: number) => {
    swiper.slideTo(dotId)
    const tl = gsap.timeline();
    tl.fromTo('.myNestedSwiper', { opacity: 0 }, { opacity: 1, duration: 1, ease: Power1.easeIn })
  }

  useEffect(() => {
    const circle = circleRef.current;
    const wrapper = circleWrapperRef.current;
    if (circle && wrapper) {
      const radius = 265;
      const dotsCount = sliderLength; // количество точек
      const angleStep = (2 * Math.PI) / dotsCount; // шаг угла
      const dotSpacing = radius; // расстояние между точками

      for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.innerHTML = `<p>${i + 1}</p>`
        dot.id = `${i}`;
        dot.style.width = '56px';
        dot.style.height = '56px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = '#42567A';
        dot.style.position = 'absolute';
        dot.style.cursor = 'pointer';
        dot.style.color = '#42567A';
        dot.style.display = 'flex';
        dot.style.alignItems = 'center';
        dot.style.justifyContent = 'center';
        dot.style.fontSize = '20px';

        const angle = i * angleStep;
        const x = radius + dotSpacing * Math.cos(angle);
        const y = radius + dotSpacing * Math.sin(angle);

        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;

        circle.appendChild(wrapper);
        wrapper.appendChild(dot)

        gsap.to(dot, { scale: 0.1, duration: 0 })

        dot.addEventListener('click', () => {
          selectSlide(+dot.id)
        })

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
  }, [swiper]);

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