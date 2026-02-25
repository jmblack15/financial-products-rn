import { Product } from '../types/product.type';


const API_URL = 'https://9964-181-135-102-247.ngrok-free.app/bp/products';

interface APIResponse {
  data: Product[];
}

export const getProductsFromAPI = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Error ${response.status}: ${errorData}`);
    }
    const result: APIResponse = await response.json();
    return result.data || [];
  } catch (error) {
    throw error;
  }
};