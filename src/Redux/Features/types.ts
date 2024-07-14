// types.ts
export interface IProduct {
    _id?: string; // Optional because it might not be present in new products
    name: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
    image: string;
  }
  
  