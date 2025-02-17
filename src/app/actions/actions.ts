'use server';
import { ProductData } from '../types/types';

const PRODUCTS_URL = 'https://dummy-data-ifta.onrender.com/api/products';

export const fetchDummyData = async (): Promise<ProductData[] | undefined> => {
  try {
    const res = await fetch(PRODUCTS_URL);

    if (!res.ok) {
      throw new Error('Fetching failed');
    }

    return res.json();
  } catch {
    console.error('Something went wrong');
  }
};
