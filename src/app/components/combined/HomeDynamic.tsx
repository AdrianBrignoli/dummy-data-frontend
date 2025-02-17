'use client';
import { ProductData } from '@/app/types/types';
import { useRef } from 'react';
import ApisAndText from './ApisAndText';
import StartScreen from '../basic/StartScreen';
import { useFadeOut } from '@/app/hooks/animations/useFadeOut';

import CarouselAndText from './CarouselAndText';

export default function HomeDynamic({
  productData,
}: {
  productData: ProductData[];
}) {
  const secRef = useRef<HTMLElement | null>(null);

  useFadeOut(secRef);

  return (
    <>
      <section ref={secRef}>
        <StartScreen />
      </section>
      <CarouselAndText productData={productData} />
      <ApisAndText />
    </>
  );
}
