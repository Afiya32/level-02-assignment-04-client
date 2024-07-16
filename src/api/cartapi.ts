/* eslint-disable @typescript-eslint/no-explicit-any */
// src/api/cartApi.ts
import axios from 'axios';

const API_BASE_URL = 'https://server-ten-zeta.vercel.app';

export const fetchCartItemsByUser = async (email: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/carts/${email}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cart items');
  }
};

export const deleteCartItem = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/carts/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete cart item');
  }
};
