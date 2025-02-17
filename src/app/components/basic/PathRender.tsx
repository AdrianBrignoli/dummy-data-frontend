import { PathRenderProps } from '@/app/types/types';

export const PathRenderArgs = [
  { label: 'base-URL', value: 'https://dummy-data-ifta.onrender.com/api' },
  {
    label: 'All-products-URL',
    value: 'https://dummy-data-ifta.onrender.com/api/products',
  },
  {
    label: 'specific-product-URL',
    value: 'https://dummy-data-ifta.onrender.com/api/products/ID',
  },
];

export default function PathRender({ label, value }: PathRenderProps) {
  return (
    <div className="flex space-x-8 items-center text-xl">
      <p className="border-l-4 border-sky-400 pl-4 min-w-44">{label}</p>
      <p className="bg-sky-900/50 p-4 rounded-lg w-full">{value}</p>
    </div>
  );
}
