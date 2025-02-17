import { fetchDummyData } from './actions/actions';
import { use } from 'react';
import ProductCard from './components/cards/ProductCard';

import Carousel from './components/complex/Carousel';
import StartScreen from './components/basic/StartScreen';
import HomeDynamic from './components/combined/HomeDynamic';

export default function Home() {
  const productData = use(fetchDummyData());

  if (!productData) return;

  return (
    <>
      <HomeDynamic productData={productData} />
    </>
  );
}
