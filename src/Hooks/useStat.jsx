import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useStat = () => {
    const axiosSecure = useAxiosSecure();

    const { data: statistics = [], isLoading: statLoading, refetch: statFetch } = useQuery({
      queryKey: ["stats"],
      queryFn: async () => {
        const res = await axiosSecure.get("/stats");
        return res.data;
      },
    });
    return [statistics, statLoading, statFetch]
};

export default useStat;