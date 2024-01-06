import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import useAuth from "../../Hooks/useAuth";
import ProfileUpdateModal from "../../Utils/ProfileUpdateModal/ProfileUpdateModal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Profile = () => {
    const axiosPublic = useAxiosPublic();
    const {user, resetPassword} = useAuth();

   const {data: users = [], isPending, refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await axiosPublic(`/users?email=${user?.email}`)
        return res.data
    }
   })
   const userName = users[0]?.name.split(' ')[1].toLowerCase()
   const userID = users[0]?._id.slice(-10)

   const handleResetPass = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You will get a reset email",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reset"
      }).then((result) => {
        if (result.isConfirmed) {
            resetPassword(user?.email)
            .then(() => {
                toast('Send Password Reset email');
            })
        }
      })
   }

   if (isPending) {
    return <Loader width={20} center="center"></Loader>;
  }

refetch()

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/wc4vRdT/905777d0e9a1dbf3f0307a1e7c48e641.jpg'
                    className='w-full mb-4 rounded-t-lg h-40'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-20'>
                    <div className='relative block'>
                        <img
                            alt='profile'
                            src={users[0]?.profileImage}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </div>

                    <p className='p-2 px-4 text-xs text-white bg-pink-700 rounded-full'>
                       User
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {userName+userID}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap justify-between text-sm text-gray-600 '>
                          <div>
                          <p className='flex flex-col'>
                                Name : 
                                <span className='font-bold text-black '>
                                {users[0]?.name}
                                </span>
                            </p>
                            <p className='flex flex-col mt-3'>
                                Country : 
                                <span className='font-bold text-black '>
                                {users[0]?.country}
                                </span>
                            </p>
                          </div>
                            <p className='flex flex-col'>
                                Email : 
                                <span className='font-bold text-black '>{users[0]?.email}</span>
                            </p>

                            <div>
                                <button
                                onClick={() => document.getElementById("profile_update_modal").showModal()}
                                className='bg-[#b62e44] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                    Update Profile
                                </button>
                                <button
                                onClick={handleResetPass}
                                className='bg-[#b62e44] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileUpdateModal id='profile_update_modal' userInfo={users[0]} refetch={refetch}></ProfileUpdateModal>
            </div>
        </div>
    )
}

export default Profile;