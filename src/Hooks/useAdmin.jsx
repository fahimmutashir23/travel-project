import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const {data: isAdmin, isLoading: adminLoading} = useQuery({
        queryKey: ["admin"],
        queryFn: async () => {
            const res = await axiosSecure(`/users?email=${user?.email}`)
            return res.data[0].admin
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;