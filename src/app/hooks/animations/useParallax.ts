import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

export const useParallax = (
  ref: RefObject<HTMLElement | null>,
  speed = 0.5
) => {
  useGSAP(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ref.current,
      { y: 200 }, // 👈 Start slightly below normal position
      {
        y: -100 * speed, // 👈 Moves up faster than normal scroll
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom', // Starts when entering viewport
          end: 'bottom top', // Ends when leaving viewport
          scrub: true, // 👈 Smooth parallax effect
        },
      }
    );
  }, [ref]);
};
