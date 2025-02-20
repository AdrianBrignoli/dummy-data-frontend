import { ProductData } from '@/app/types/types';
import Image from 'next/image';

export default function ProductCard({ props: props }: { props: ProductData }) {
  return (
    <div className="flex hover:border-gray-300">
      <div className="flex-[4] overflow-hide">
        <Image
          src={props.image_url}
          height={500}
          width={500}
          alt={props.name}
          loading="lazy"
          className="object-cover w-full h-full"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
        />
      </div>
      <div className="flex-[2] flex flex-col justify-between p-4 text-sm">
        <div>
          <h3 className="my-2 text-lg">{props.name}</h3>
          <div className="text-gray-400 space-y-1">
            <p className="text-yellow-600 text-lg">{props.price}</p>
            <p>{props.description_short}</p>
            <p>{props.description_long}</p>
          </div>
        </div>
        <button className="bg-gray-600 bg-opacity-50 hover:bg-opacity-80 p-2 w-full text-gray-300 rounded-lg mt-4">
          Read more
        </button>
      </div>
    </div>
  );
}
