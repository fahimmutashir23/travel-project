import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useHotel = () => {
    const axiosPublic = useAxiosPublic()

    const {data: hotels = [], refetch, isPending} = useQuery({
        queryKey: ['hotels'],
        queryFn: async () => {
            const res = await axiosPublic('/hotels')
            return res.data
        }
    })
    
    return [hotels, refetch, isPending]
};

export default useHotel;