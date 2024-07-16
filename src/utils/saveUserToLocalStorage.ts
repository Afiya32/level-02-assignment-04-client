// src/utils/saveusertolocalstorage
import { UserResponse } from "../Redux/Features/types";



// Function to save user data to localStorage
export const saveUserToLocalStorage = (userResponse: UserResponse) => {
  localStorage.setItem('user', JSON.stringify(userResponse));
};

// Function to remove user data from localStorage
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};