import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTourPackages = (limit) => {
    const axiosPublic = useAxiosPublic();

    const {data: tourPackages = [], isLoading, refetch} = useQuery({
        queryKey: ['tourPackages'],
        queryFn: async () => {
          const res = await axiosPublic(`/packages?limit=${limit}`)
          return res.data
        }
      })
    return [tourPackages, isLoading, refetch]
};

export default useTourPackages;