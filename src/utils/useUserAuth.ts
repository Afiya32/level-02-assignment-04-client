// src/utils/useUserAuth.ts

import { useState } from 'react';
import { postData } from './utilis2';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveUserToLocalStorage } from './saveUserToLocalStorage';
import { LoginData, SignUpData } from '../Redux/Features/types';

const SIGNUP_ENDPOINT = 'https://server-ten-zeta.vercel.app/api/users/auth/signup';
const LOGIN_ENDPOINT = 'https://server-ten-zeta.vercel.app/api/users/auth/login';

export const useSignUp = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const signUp = async (formData: SignUpData) => {
        try {
            const userResponse = await postData(SIGNUP_ENDPOINT, formData);
            console.log('Signup successful:', userResponse);

            saveUserToLocalStorage(userResponse); // Save user to localStorage

            Swal.fire({
                icon: 'success',
                title: 'Signup successful',
                showConfirmButton: false,
                timer: 1500,
            });

            navigate('/dashboard');
        } catch (error) {
            console.error('Signup error:', error);
            setError('Unknown error occurred');
        }
    };

    return { signUp, error };
};

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (formData: LoginData) => {
        try {
            const userResponse = await postData(LOGIN_ENDPOINT, formData);
            console.log('Login successful:', userResponse);

            saveUserToLocalStorage(userResponse); // Save user to localStorage

            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                showConfirmButton: false,
                timer: 1500,
            });

            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            setError('Unknown error occurred');
        }
    };

    return { login, error };
};
