import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://travel-server-lemon.vercel.app"
    // baseURL: "http://localhost:8000"
})


const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;

