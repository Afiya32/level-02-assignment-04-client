import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginData, SignUpData, UserResponse } from '../Redux/Features/types';
import { postData } from './utilis2';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveUserToLocalStorage } from './saveUserToLocalStorage';

const SIGNUP_ENDPOINT = 'https://server-ten-zeta.vercel.app/api/users/auth/signup';
const LOGIN_ENDPOINT = 'https://server-ten-zeta.vercel.app/api/users/auth/login';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserResponse, Error, SignUpData>({
    mutationFn: (userData) => postData<UserResponse>(SIGNUP_ENDPOINT, userData),
    onSuccess: (data) => {
      console.log('Signup successful:', data);

      saveUserToLocalStorage(data); // Save user to localStorage

      Swal.fire({
        icon: 'success',
        title: 'Signup successful',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/dashboard');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error: Error) => {
      console.error('Signup error:', error);

      Swal.fire({
        icon: 'error',
        title: 'Signup failed',
        text: error.message,
      });
    }
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserResponse, Error, LoginData>({
    mutationFn: (userData) => postData<UserResponse>(LOGIN_ENDPOINT, userData),
    onSuccess: (data) => {
      console.log('Login successful:', data);

      saveUserToLocalStorage(data); // Save user to localStorage

      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/dashboard');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error: Error) => {
      console.error('Login error:', error);

      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.message,
      });
    }
  });
};