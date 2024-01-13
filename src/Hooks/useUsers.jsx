
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {data: users = [], isLoading, refetch} = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axiosSecure(`/users`)
      return res.data
    }
  })

  return [users, isLoading, refetch]
};

export default useUsers;