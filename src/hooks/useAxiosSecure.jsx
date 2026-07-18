import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 1. Create the instance
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    useEffect(() => {
        // 2. Request Interceptor: Attaches token immediately
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            }, 
            (error) => {
                return Promise.reject(error);
            }
        );

        // 3. Response Interceptor: Catches errors and handles logouts
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response ? error.response.status : null;
                
                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        // 4. Cleanup to prevent duplicate interceptors stacking up on re-renders
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;