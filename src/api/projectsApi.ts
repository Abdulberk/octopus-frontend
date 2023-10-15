import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL || "https://octopus-backend-h8l8jrg13-abdulberk.vercel.app"

const projectsInstance = axios.create({
    baseURL: `${baseUrl}/get-projects`,
    });



    projectsInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
        
    }
    );


    export const getProjects = async() => {
        const response = await projectsInstance.get('/');
        return response.data.projects;
        
    };
