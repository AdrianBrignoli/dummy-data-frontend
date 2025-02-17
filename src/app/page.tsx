import { fetchDummyData } from './actions/actions';
import { use } from 'react';
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
