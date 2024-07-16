// src/redux/features/types.ts

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

export interface ICart {
  _id?: string;
  productId: string;
  productName: string;
  price: number;
  buyerName: string;
  buyerEmail: string;
  phone: number;
  address: string;
  productImage: string;
  quantity: number;
  totalPrice: number;
}
//

export interface ICartItem {
  _id: string;
  productId: string;
  productName: string;
  price: number;
  buyerName: string;
  buyerEmail: string;
  phone: number;
  address: string;
  productImage: string;
  quantity: number;
  totalPrice: number;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address?: string;
  image?: string;
  // Add any other properties as needed
}

export interface UserData {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  image: string;
  // any other properties
}

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address?: string;
  image?: string;
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
