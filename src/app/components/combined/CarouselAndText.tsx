import Carousel from '../complex/Carousel';
import ProductCard from '../cards/ProductCard';
import { ProductData } from '@/app/types/types';
import { useRef } from 'react';
import { useSlideIn } from '@/app/hooks/animations/useSlideIn';
import { useFadeOut } from '@/app/hooks/animations/useFadeOut';

export default function CarouselAndText({
  productData,
}: {
  productData: ProductData[];
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const carouselTextRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useSlideIn(carouselRef, {
    direction: 'right',
    duration: 1.5,
  });
  useSlideIn(carouselTextRef, {
    direction: 'left',
    duration: 1.5,
  });
  //useParallax(sectionRef, 20.5);
  useFadeOut(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto flex justify-center">
        <div ref={carouselTextRef} className="my-auto pr-24">
          <h3 className="text-3xl">Available products</h3>
          <p className="my-auto text-gray-400 mt-2">
            Products currently available through the API
          </p>
        </div>
        <div
          ref={carouselRef}
          className="flex-[2] m-4 max-w-[50em] max-h-[40em]"
        >
          <Carousel>
            {productData?.map((p, i) => (
              <ProductCard key={i} props={p} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
