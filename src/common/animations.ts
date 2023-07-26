import { Power1, gsap } from "gsap";
import { keyEventsLength } from "./constants";

export const rotateAnimation = (slideIndex: number) => {
  const rotateDeg = 360 / keyEventsLength * (-slideIndex + 1) - (360 / keyEventsLength - 0.1)
  gsap.to('.circlePagination', { transform: `rotate(${rotateDeg}deg)` })
  gsap.to('.circlePagination__dot', { scale: 0.1, duration: 0, background: '#42567A', transform: `rotate(${-rotateDeg}deg)` })
  gsap.to(`.circlePagination__dot:nth-child(${slideIndex})`, { scale: 1, border: '1px solid rgba(48, 62, 88, 0.5)', background: '#F4F5F9' })
}