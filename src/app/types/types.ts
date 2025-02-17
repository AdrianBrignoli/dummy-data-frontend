export type ProductData = {
  id: number;
  name: string;
  price: number;
  description_short: string;
  description_long: string;
  image_url: string;
};

export type PathRenderProps = {
  label: string;
  value: string;
};

export type CarouselProps = {
  children: React.ReactNode;
};

export type SlideInOptions = {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
  distance?: number;
  triggerPoint?: string;
};
