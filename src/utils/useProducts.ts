import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProduct } from '../Redux/Features/types';
import { deleteData, fetchData, postData, updateData } from './utilis';


const PRODUCTS_ENDPOINT = 'https://server-ten-zeta.vercel.app/api/products';

export const useProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: () => fetchData<IProduct[]>(PRODUCTS_ENDPOINT),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<IProduct, Error, IProduct>({
    mutationFn: (newProduct) => postData<IProduct>(PRODUCTS_ENDPOINT, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = (productId: string) => {
  const queryClient = useQueryClient();
  return useMutation<IProduct, Error, Partial<IProduct>>({
    mutationFn: (updatedProduct) => updateData<IProduct>(`${PRODUCTS_ENDPOINT}/${productId}`, updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useDeleteProduct = (productId: string) => {
  const queryClient = useQueryClient();
  return useMutation<void, Error>({
    mutationFn: () => deleteData(`${PRODUCTS_ENDPOINT}/${productId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
