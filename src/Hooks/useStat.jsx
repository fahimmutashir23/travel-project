import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useStat = () => {
    const axiosSecure = useAxiosSecure();

    const { data: statistics = [], isLoading } = useQuery({
      queryKey: ["stats"],
      queryFn: async () => {
        const res = await axiosSecure.get("/stats");
        return res.data;
      },
    });
    return [statistics, isLoading]
};

export default useStat;