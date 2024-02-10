import { useEffect, useState } from "react";
import useWebControllers from "../../../Hooks/useWebControllers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ShowPackagesLimit = () => {
  const [num, setNum] = useState(8);
  const [error, setError] = useState('');
  const [webControllersAPI, controllerFetch] = useWebControllers(1);
  const axiosSecure = useAxiosSecure();

  const isNumber = (value) => {
    return /^\d+$/.test(value);
  }

useEffect(() => {
    if(isNumber(num) === false) {
        return setError('Please enter valid number');
      } else{
        axiosSecure.patch(`/webControllers/${webControllersAPI._id}`, {num})
        .then(() => {
            controllerFetch()
        })
      }
}, [num])

  return (
    <div className="border-l-[10px] p-1 border-blue-400 rounded-md border-b border-t w-64 border-r rounded-r-none shadow-md bg-gray-100">
      <h1 className="font-semibold text-lg ml-2">Packages show in home</h1>
      <div className="w-48">
        <input
          onChange={(e) => setNum(e.target.value)}
          type="text"
          name="number"
          className="text-black border ml-2 border-blue-400  px-4 py-1 rounded-sm"
        />
      </div>
      <p className="text-red-500 mt-1 text-sm">{error}</p>
    </div>
  );
};

export default ShowPackagesLimit;
