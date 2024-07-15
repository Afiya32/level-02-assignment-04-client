import { IProduct } from "../Redux/Features/types";

export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  export const fetchProductById = async (productId: string): Promise<IProduct> => {
    const response = await fetch(`https://server-ten-zeta.vercel.app/api/products/${productId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  export const postData = async <T>(url: string, data: T): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const updateData = async <T>(url: string, data: Partial<T>): Promise<T> => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const deleteData = async (url: string): Promise<void> => {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  };


 