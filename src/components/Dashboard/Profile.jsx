import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

   const {data: users = [], isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await axiosPublic(`/users?email=${user?.email}`)
        return res.data
    }
   })

    const userName = users[0]?.name.split(' ')[1].toLowerCase()
    const userID = users[0]?._id.slice(-10)

   if (isLoading) {
    return <Loader width={20} center="center"></Loader>;
  }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/wc4vRdT/905777d0e9a1dbf3f0307a1e7c48e641.jpg'
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={users[0]?.profileImage}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-pink-700 rounded-full'>
                       User
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {userName+userID}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name : {users[0]?.name}
                                <span className='font-bold text-black '>
                                  
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email : {users[0]?.email}
                                <span className='font-bold text-black '></span>
                            </p>

                            <div>
                                <button className='bg-[#b62e44] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                    Update Profile
                                </button>
                                <button className='bg-[#b62e44] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;