import bg1 from "../../assets/backgroundImage/background1.jpg";
import bg2 from "../../assets/backgroundImage/background2.jpg";
import bg3 from "../../assets/backgroundImage/background3.jpg";
import bg4 from "../../assets/backgroundImage/background4.jpg";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import useCountry from "../../Hooks/useCountry";
import Loader from "../../Utils/Loader/Loader";

const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;



const SignUp = () => {
  const [errorMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUpUser, updateUser, logOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const countries = useCountry();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const password = e.target.password.value;
    const reTypePassword = e.target.reTypePassword.value;
    const photo = e.target.photo.files[0];

    if (password !== reTypePassword) {
      return setErrMsg("Re-Type-Password was not match");
    }

    const imgFile = { image: photo };
    const res = await axiosPublic.post(imgUploadUrl, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.data.display_url) {
      setLoading(false);
      signUpUser(email, password).then((res) => {
        if (res.user) {
          toast("successfully Sign Up");
          logOutUser();
          updateUser({
            displayName: name,
            photoURL: res.data?.data.display_url,
          });
        }
      });
      const userInfo = {
        name: name,
        email: email,
        country: country,
        profileImage: res.data.data.display_url,
        active_status: "active",
      };
      const response = await axiosPublic.post("/users", userInfo);
      if (response.data) {
        navigate('/signIn')
        e.target.reset();
      }
    }
  };
  return (
    <div className="relative -mt-5">
      <div
        className="h-[calc(100vh-100px)] border-2"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      ></div>

      <div className="absolute -top-4 inset-0 bg-white h-6"></div>
      <div className="absolute -bottom-4 w-full bg-white h-6"></div>
      <div className="absolute -right-4 -top-2 w-6 bg-white h-[calc(100%+50px)]"></div>
      <div className="absolute -left-4 -top-1 w-6 bg-white h-[calc(100%+50px)]"></div>

      <div className="absolute inset-0 flex items-center justify-center mx-auto">
        <div className=" w-9/12 bg-blue-800 bg-opacity-80 flex shadow-xl shadow-black">
          <div className="flex-1 relative">
            <img
              src={bg2}
              alt=""
              className="rounded-r-2xl h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-5xl uppercase text-center font-bold text-blue-300 mb-10">
                  Welcome!! <br /> To Our Travels
                </h2>
              </div>
            </div>
          </div>

          <div className="w-5/12 px-10 h-full my-auto">
            <div className="py-3">
              <h2 className="text-2xl uppercase text-center font-bold text-green-300 mb-5">
                Sign Up
                <div className="mt-1 h-1 w-10 bg-green-400 rounded-full mx-auto"></div>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    type="text"
                    name="name"
                    className="block text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-50 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Full Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    className="block text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-8 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <label className="peer-focus:font-medium absolute text-gray-300 duration-300 transform scale-75 -top-5 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Select your country
                  </label>
                  <select
                    id="countries"
                    name="country"
                    className="border-0 focus:outline-none border-b-2 bg-transparent border-gray-300 text-white text-sm block w-full"
                  >
                    {countries?.map((country, idx) => (
                      <option className="text-black" key={idx}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    type="password"
                    name="password"
                    className="block text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                    placeholder=""
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-8 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    type="password"
                    name="reTypePassword"
                    className="block text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                    placeholder=""
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Re-Type-Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-3 group">
                  <input
                    type="file"
                    name="photo"
                    className="block py-2.5 text-gray-200 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Your photo URL
                  </label>
                </div>
                <p className="text-red-700 text-sm font-semibold font-mono">
                  {errorMsg}
                </p>
                <button
                  type="submit"
                  className="btn bg-green-600 border-none text-base-100 w-full hover:bg-orange-900"
                >
                  {loading ? <Loader width="12"></Loader> : "Sign Up"}
                </button>
              </form>
              <p className="text-white mt-1">
                {"Don't have an Account?"}{" "}
                <Link to="/signIn" className="text-green-300">
                  Please Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
