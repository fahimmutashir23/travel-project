import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://travel-server-lemon.vercel.app"
})


const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;