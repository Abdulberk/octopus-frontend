import axios, {AxiosError, AxiosResponse} from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL || "https://octopus-backend-h8l8jrg13-abdulberk.vercel.app";

const authInstance = axios.create({
    baseURL: `${baseUrl}/auth`,
});

authInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await authInstance.post('/login', data);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const err = error as AxiosError<ErrorResponse>;
            if (err.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            throw new Error(err.response?.data?.message || 'Bilinmeyen bir hata oluştu');
        }
        throw new Error('Bilinmeyen bir hata oluştu');
    }
};

interface ErrorResponse {
    message: string;
}


type CustomAxiosError<T> = {
    response?: AxiosResponse<T>; 
} & AxiosError;

export const me = async () => {
    try {
        const response = await authInstance.get('/me');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const err = error as CustomAxiosError<ErrorResponse>;
            if (err.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            throw new Error(err.response?.data?.message || 'Bilinmeyen bir hata oluştu');
        }
        throw new Error('Bilinmeyen bir hata oluştu');
    }
};
