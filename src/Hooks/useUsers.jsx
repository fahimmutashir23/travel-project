
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = (email) => {
  const axiosSecure = useAxiosSecure();
  const sendEmail = email ? email : ""

  const {data: users = [], isLoading, refetch} = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axiosSecure(`/users?email=${sendEmail}`)
      return res.data
    }
  })

  return [users, isLoading, refetch]
};

export default useUsers;