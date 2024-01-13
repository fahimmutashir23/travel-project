import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useHotel = (limit) => {
    const axiosPublic = useAxiosPublic()

    const {data: hotels = [], refetch, isLoading} = useQuery({
        queryKey: ['hotels'],
        queryFn: async () => {
            const res = await axiosPublic(`/hotels?limit=${limit}`)
            return res.data
        }
    })
    
    return [hotels, refetch, isLoading]
};

export default useHotel;