import { useEffect, useState } from 'react';
import { UserResponse } from '../Redux/Features/types';
import { removeUserFromLocalStorage } from './saveUserToLocalStorage';


export const useAuth = () => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
      const userData: UserResponse = JSON.parse(userLocalStorage);
      setUser(userData);
    }
  }, []);

  const logout = () => {
    removeUserFromLocalStorage();
    setUser(null);
  };

  return { user, logout };
};