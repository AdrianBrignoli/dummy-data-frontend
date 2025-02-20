'use server';
import { ProductData } from '../types/types';

const PRODUCTS_URL = 'https://dummy-data-ifta.onrender.com/api/products';

export const fetchDummyData = async (): Promise<ProductData[] | undefined> => {
  try {
    const res = await fetch(PRODUCTS_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Fetching failed: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Fetching error:', error);
    throw error;
  }
};
