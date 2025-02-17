import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';
import { SlideInOptions } from '@/app/types/types';

export const useSlideIn = (
  ref: RefObject<HTMLDivElement | null>,
  options: SlideInOptions = {}
) => {
  const {
    direction = 'right',
    duration = 1.2,
    triggerPoint = 'top 80%', // Triggers when 80% of element is in viewport
  } = options;

  useGSAP(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      visibility: 'hidden',
    };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      visibility: 'visible',
      duration,
      x: '0vw',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: triggerPoint,
        toggleActions: 'play none none reverse', // Runs on enter, reverses on exit
      },
    };

    // Set initial position off-screen
    if (direction === 'left') fromVars.x = '-100vw';
    if (direction === 'right') fromVars.x = '100vw';
    if (direction === 'top') fromVars.y = '-100vh';
    if (direction === 'bottom') fromVars.y = '100vh';

    gsap.fromTo(ref.current, fromVars, toVars);
  }, [ref]);
};
