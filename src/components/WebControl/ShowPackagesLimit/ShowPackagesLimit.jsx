import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const ShowPackagesLimit = () => {
  const [error, setError] = useState('');
  const axiosSecure = useAxiosSecure();


  const isNumber = (value) => {
    return /^\d+$/.test(value);
  }


const handleSubmit = (e) => {
    const num = parseInt(e.target.value);
    if(isNumber(num) === false) {
      return setError('Please enter valid number');
    } else{
      setError('')
      axiosSecure.patch(`/webControllers/65c5a7bda2ff373c866f242d`, {num})
      .then(() => {
          toast('Done')
      })
    }
}

  return (
    <div className="border-l-[10px] p-1 border-blue-400 rounded-md border-b border-t w-64 border-r rounded-r-none shadow-md bg-gray-100 max-h-full">
      <h1 className="font-semibold text-lg ml-2">Packages show in home</h1>
      <div className="w-48">
        <input
          onChange={handleSubmit}
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
