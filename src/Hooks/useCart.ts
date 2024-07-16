// src/Hooks/usecart
import { useState } from "react";
import { ICart } from "../Redux/Features/types";
import { postData } from "../utils/utilis";

const CARTS_ENDPOINT = "https://server-ten-zeta.vercel.app/api/carts";

export const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const addToCart = async (cartData: ICart) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await postData<ICart>(CARTS_ENDPOINT, cartData);
      if (!response) {
        throw new Error("Failed to add product to cart");
      }
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading, error, success };
};
