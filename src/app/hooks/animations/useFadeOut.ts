import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

export const useFadeOut = (ref: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ref.current,
      { opacity: 1 }, // Fully visible initially
      {
        opacity: 0, // Fades out completely
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'center center', // Starts fading when section reaches center
          end: '+=50%', // Fully faded when user scrolls 50% past it
          scrub: true, // Smooth fade effect while scrolling
        },
      }
    );
  }, [ref.current]);
};
