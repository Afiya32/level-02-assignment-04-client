import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../Redux/Features/types";
import { deleteData, fetchData, postData, updateData } from "../utils/utilis";

const PRODUCTS_ENDPOINT = "https://server-ten-zeta.vercel.app/api/products";

export const useProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: () => fetchData<IProduct[]>(PRODUCTS_ENDPOINT),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<IProduct, Error, IProduct>({
    mutationFn: (newProduct) =>
      postData<IProduct>(PRODUCTS_ENDPOINT, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useUpdateProduct = (productId: string) => {
  const queryClient = useQueryClient();

  return useMutation<IProduct, Error, Partial<IProduct>>({
    mutationFn: async (updatedProduct) => {
      try {
        const updatedProductResponse = await updateData<IProduct>(`${PRODUCTS_ENDPOINT}/${productId}`, updatedProduct);
        return updatedProductResponse; // Ensure updateData returns the updated product directly
      } catch (error) {
        throw new Error(`Failed to update product: ${error}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error updating product:", error);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (productId: string) => {
      try {
        await deleteData(`${PRODUCTS_ENDPOINT}/${productId}`);
      } catch (error) {
        throw new Error(`Failed to delete product: ${error}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });
};