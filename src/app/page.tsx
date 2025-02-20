import { fetchDummyData } from './actions/actions';
import { use } from 'react';
import HomeDynamic from './components/combined/HomeDynamic';

export default function Home() {
  const productData = use(fetchDummyData());

  if (!productData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <HomeDynamic productData={productData} />;
}
