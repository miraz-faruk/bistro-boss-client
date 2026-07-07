import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // request interceptor to add authorization header for every secure call to api 
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        // console.log('request stopped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;