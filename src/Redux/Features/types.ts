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
  export interface UserData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string;
    // any other properties
  }
  
  export interface UserResponse {
    data: UserData;
    // any other properties
  }
  
  export interface SignUpData {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    address?: string;
    image?: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  