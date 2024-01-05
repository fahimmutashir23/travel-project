import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCountry from '../../Hooks/useCountry';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;


const ProfileUpdateModal = ({id, userInfo, refetch}) => {
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const countries = useCountry();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const country = e.target.country.value;
        const photo = e.target.photo.files[0];
        
    
        const imgFile = {image: photo}
        const res = await axiosPublic.post(imgUploadUrl, imgFile, {
          headers : {
            "content-type": "multipart/form-data"
          }
        })
      
        if(res.data.data.display_url){
          setLoading(false)
          const userInfo = {
            name : name,
            email: email,
            country: country,
            profileImage : res.data.data.display_url,
          };
          const response = await axiosSecure.put(`/users/${userInfo?.email}`, userInfo)
          if(response.data){
            refetch()
            toast('Update Success')
            e.target.reset();
          }
        }
      };

  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box rounded-md">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl uppercase text-center font-bold text-blue-950 dark:text-orange-500 mb-10">
                  Update Your Profile
                  </h2>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={userInfo?.name}
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      defaultValue={userInfo?.email}
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Select your country
                    </label>
                    <select
                      id="countries"
                      name="country"
                      className="border-0 border-b-2 bg-transparent border-gray-300 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                    >
                      {countries?.map((country, idx) => (
                        <option className="" key={idx}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="file"
                      name="photo"
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Your photo URL
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-base-100 w-full hover:bg-orange-900"
                  >
                    {
                      loading? <Loader width='12'></Loader> : "Update"
                    }
                  </button>
                </form>
        </div>
      </dialog>
    </div>
  );
};

ProfileUpdateModal.propTypes = {
    id: PropTypes.string,
    refetch: PropTypes.func,
    userInfo: PropTypes.object
};

export default ProfileUpdateModal;
