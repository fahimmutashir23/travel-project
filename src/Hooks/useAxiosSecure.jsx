import axios from "axios";


const axiosSecure = axios.create({
    
    // baseURL: "https://travel-server-lemon.vercel.app"
    baseURL: "http://localhost:5001"
})


const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;