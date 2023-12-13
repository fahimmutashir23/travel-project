import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";



// eslint-disable-next-line react/prop-types
const SignInModal = ({ id }) => {
  const [errorMsg, setErrMsg] = useState("");
  const { signInUser } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then(res => {
      if(res.user){
        toast('successfully Sign In')
        e.target.reset()
      }
    })
    .catch(err => {
      if(err){
        setErrMsg('Your email and password was wrong')
      }
    })
  };
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box bg-transparent backdrop-blur-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl uppercase text-center font-bold text-blue-950 dark:text-orange-500 mb-10">
                  SignIn
                </h2>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                  </label>
                </div>
                <p className="text-red-700 text-sm font-semibold font-mono py-2">
                  {errorMsg}
                </p>
                <button
                  type="submit"
                  className="btn bg-orange-500 text-base-100 w-full hover:bg-orange-900"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignInModal;
