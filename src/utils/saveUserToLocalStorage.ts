import { UserResponse } from "../Redux/Features/types";


// Function to save user data to localStorage
export const saveUserToLocalStorage = (userData: UserResponse) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  // Function to remove user data from localStorage
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };