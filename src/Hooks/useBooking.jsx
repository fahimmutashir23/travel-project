import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = (searchValue, email) => {
        const axiosSecure = useAxiosSecure();
      
        const {data: booking = [], isLoading, refetch} = useQuery({
          queryKey: ['bookings'],
          queryFn: async () => {
            const res = await axiosSecure(`/bookings?email=${email}&search=${searchValue}`)
            return res.data
          }
        })
      
        return [booking, isLoading, refetch]
      };

export default useBooking;