
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useUsers = () => {
    const axiosPublic = useAxiosPublic()
    const [users, setUsers] = useState(null)

    useEffect(()=> {
        axiosPublic('/users')
        .then(res => {
          setUsers(res.data);
        })
      }, [axiosPublic])
      return users
};

export default useUsers;