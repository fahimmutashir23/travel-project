import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCountry from "../../Hooks/useCountry";
import Loader from "../Loader/Loader";

const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;

// eslint-disable-next-line react/prop-types
const SignUpModal = ({ id }) => {
  const [errorMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUpUser, updateUser, logOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const countries = useCountry()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const password = e.target.password.value;
    const reTypePassword = e.target.reTypePassword.value;
    const photo = e.target.photo.files[0];
    

    if (password !== reTypePassword) {
      return setErrMsg("Re-Type-Password was not match");
    }

    const imgFile = {image: photo}
    const res = await axiosPublic.post(imgUploadUrl, imgFile, {
      headers : {
        "content-type": "multipart/form-data"
      }
    })
  
    if(res.data.data.display_url){
      setLoading(false)
      signUpUser(email, password)
      .then((res) => {
        if (res.user) {
          toast("successfully Sign Up");
          updateUser({
            displayName: name,
            photoURL: res.data?.data.display_url
          })
        }
      })
      const userInfo = {
        name : name,
        email: email,
        country: country,
        profileImage : res.data.data.display_url,
        active_status : "active"
      };
      const response = await axiosPublic.post('/users', userInfo)
      if(response.data){
        logOutUser()
        e.target.reset();
      }
    }
  };
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box bg-transparent backdrop-blur-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-gray-200 absolute right-2 top-2">
              ✕
            </button>
            </form>
            <div>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl uppercase text-center font-bold text-blue-950 dark:text-orange-500 mb-10">
                    Registration
                  </h2>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      className="block py-2.5 px-0 text-gray-200 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                      className="block py-2.5 text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                      className="border-0 border-b-2 bg-transparent border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    >
                      {countries?.map((country, idx) => (
                        <option className="bg-gray-800" key={idx}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="password"
                      className="block py-2.5 text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Password
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="reTypePassword"
                      className="block py-2.5 text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Re-Type-Password
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="file"
                      name="photo"
                      className="block py-2.5 text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Your photo URL
                    </label>
                  </div>
                  <p className="text-red-700 text-sm font-semibold font-mono py-2">
                    {errorMsg}
                  </p>
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-base-100 w-full hover:bg-orange-900"
                  >
                    {
                      loading? <Loader width='12'></Loader> : "Submit"
                    }
                  </button>
                </form>
              </div>
            </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignUpModal;
