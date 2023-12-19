import axios from "axios";


const axiosSecure = axios.create({
    
    baseURL: "https://travel-server-lemon.vercel.app"
})


const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;