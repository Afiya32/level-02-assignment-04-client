// src/utils/utilis2.ts

import axios from 'axios';
import { LoginData, SignUpData, UserResponse } from '../Redux/Features/types';

export const postData = async (url: string, data: SignUpData | LoginData): Promise<UserResponse> => {
    try {
        const response = await axios.post<UserResponse>(url, data);
        return response.data; // Assuming axios handles the response correctly
    } catch (error) {
        throw new Error('Unknown error occurred');
    }
};
