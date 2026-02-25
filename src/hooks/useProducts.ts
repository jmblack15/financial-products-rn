
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductsFromAPI } from '../services/productService';
import { Product } from '../types/product.type';

export const useProducts = () => {
  const [search, setSearch] = useState('');

  const {
    data: products = [],
    isLoading,
    isError,
    refetch
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProductsFromAPI,
  });


  return {
    products,
    isLoading,
    isError,
    refetch
  };
};