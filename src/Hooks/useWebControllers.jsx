
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useWebControllers = (id) => {
const axiosSecure = useAxiosSecure();

const {data: webControllersAPI = [], isLoading: controllerLoading, refetch: controllerFetch} = useQuery({
    queryKey: ['webControllers'],
    queryFn: async ()=> {
        const res = await axiosSecure(`/webControllers/${id}`)
        return res.data
    }
})

    return [webControllersAPI, controllerFetch, controllerLoading]
};

export default useWebControllers;