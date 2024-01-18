import bg1 from "../../assets/backgroundImage/background1.jpg";
import bg2 from "../../assets/backgroundImage/background2.jpg";
import bg3 from "../../assets/backgroundImage/background3.jpg";
import bg4 from "../../assets/backgroundImage/background4.jpg";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [errorMsg, setErrMsg] = useState("");
  const { signInUser, googleSignIn, logOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    

    signInUser(email, password)
      .then((res) => {
        if (res.user) {
          toast("successfully Sign In");
          navigate("/");
          e.target.reset();
        }
      })
      .catch((err) => {
        if (err) {
          setErrMsg("Your email and password was wrong");
          logOutUser()
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      if (res) {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          country: "",
          profileImage: res.user.photoURL,
          active_status: "active",
        };
        axiosPublic.post("/users", userInfo);
      }
    });
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
            <img src={bg2} alt="" className="rounded-r-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h2 className="text-5xl uppercase text-center font-bold text-blue-300 mb-10">
                  Welcome Back
                </h2>
              </div>
            </div>
          </div>

          <div className="w-5/12 px-10 h-full my-auto">
            <div className="">
              <h2 className="text-2xl uppercase text-center font-bold text-green-300 mb-10">
                Sign In
                <div className="mt-1 h-1 w-10 bg-green-400 rounded-full mx-auto"></div>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    className="block text-white py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                    required
                  />
                  <label className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    className="block text-white py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=""
                    required
                  />
                  <label className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                  </label>
                </div>
                <p className="text-red-700 text-sm font-semibold font-mono py-2">
                  {errorMsg}
                </p>
                <button
                  type="submit"
                  className="btn bg-green-600 border-none text-base-100 w-full hover:bg-orange-900"
                >
                  Submit
                </button>
              </form>
              <div className="flex justify-center mt-4">
                <Button
                  sx={{ color: "white" }}
                  onClick={handleGoogleSignIn}
                  variant="outlined"
                  startIcon={<Google />}
                >
                  Continue with Google
                </Button>
              </div>
              <p className="text-white mt-3">
                {"Don't have an Account?"}{" "}
                <Link to="/signUp" className="text-green-300">
                  Please Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
