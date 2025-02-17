'use client';
import { CarouselProps } from '@/app/types/types';
import { useState } from 'react';
import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Image from 'next/image';

export default function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="flex flex-col border border-gray-500 rounded-lg h-full">
      <div>{childrenArray[currentIndex]}</div>
      <div className="flex justify-evenly flex-1 my-4">
        <div
          className="rounded-full border border-gray-500 p-4 hover:border-gray-200 my-auto"
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
        >
          <BsArrowLeft />
        </div>
        <div
          className="rounded-full border border-gray-500 p-4 hover:border-gray-200 my-auto"
          onClick={() =>
            setCurrentIndex((prev) =>
              Math.min(childrenArray.length - 1, prev + 1)
            )
          }
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
