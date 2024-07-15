import Cookies from 'js-cookie';
import { UserResponse } from '../Redux/Features/types';


const COOKIE_NAME = 'user';

export const getUserFromCookie = (): UserResponse | null => {
  const userCookie = Cookies.get(COOKIE_NAME);
  if (userCookie) {
    return JSON.parse(userCookie) as UserResponse;
  }
  return null;
};

export const saveUserToCookie = (userData: UserResponse): void => {
  Cookies.set(COOKIE_NAME, JSON.stringify(userData), { expires: 7 }); // Cookie expires in 7 days
};

export const removeUserFromCookie = (): void => {
  Cookies.remove(COOKIE_NAME);
};