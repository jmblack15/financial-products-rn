import { Product } from '../types/product.type';


const API_URL = 'http://192.168.1.67:3002/bp/products';

export const getProductsFromAPI = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Status Code:", response.status);

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Error ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    console.log("Datos recibidos:", data);
    return data;
  } catch (error) {
    console.error("Fallo total en fetch:", error);
    throw error;
  }
};