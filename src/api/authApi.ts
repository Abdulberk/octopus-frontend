import axios from 'axios';

const baseUrl = "https://octopus-backend-g4ohfsy77-abdulberk.vercel.app"

const authInstance = axios.create({
    baseURL: `${baseUrl}/auth`,
    });


    authInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
        
    }
    );


    export const login = async(data: { email: string; password: string }) => {
        return authInstance.post('/login', data);
    };


    

