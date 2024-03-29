import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = (email, searchValue, category) => {
        const axiosSecure = useAxiosSecure();
        
      
        const {data: booking = [], isLoading, refetch} = useQuery({
          queryKey: ['bookings'],
          queryFn: async () => {
            const res = await axiosSecure(`/bookings?email=${email}&search=${searchValue}&category=${category}`)
            return res.data
          }
        })
      
        return [booking, isLoading, refetch]
      };

export default useBooking;