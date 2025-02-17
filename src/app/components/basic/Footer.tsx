'use client';
import { useParallax } from '@/app/hooks/animations/useParallax';
import { useRef } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  const secRef = useRef<HTMLElement | null>(null);
  useParallax(secRef, 0.1);

  return (
    <section
      ref={secRef}
      className="flex flex-col justify-center relative min-h-60 bg-gray-900"
    >
      <div className="relative flex justify-between px-20">
        <h1 className="relative text-xl text-gray-400 my-auto">
          An Adrian Brignoli website
        </h1>
        <div className="flex text-2xl space-x-8 my-auto">
          <Link href={'https://github.com/AdrianBrignoli'}>
            <BsGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/adrian-brignoli-319348104/'}>
            <BsLinkedin />
          </Link>
        </div>
        <div className="text-gray-500 text-sm">
          <p>brignoliadrian@gmail.com</p>
          <p>Stockholm, Sweden</p>
          <p>NextJs, GSAP, AWS, Render</p>
        </div>
      </div>
    </section>
  );
}
