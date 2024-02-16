/* eslint-disable react/prop-types */
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdvertisementTable = ({ advertisement, idx, refetch }) => {
    const axiosSecure = useAxiosSecure();
    

    const handleChange = (e) => {
       if(e === true){
        axiosSecure.patch(`/advertisements/${advertisement._id}`, {active: true})
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
                toast('Done')
            }
        })
       } else{
        axiosSecure.patch(`/advertisements/${advertisement._id}`, {active: false})
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
                toast('Done')
            }
        })
       }
    }
  return (
    <>
      <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <th scope="row" className="px-6 py-4 font-medium text-lg">{idx}</th>
        <td className="px-6 py-4 text-center">
            <img src={advertisement.url} alt="" className="w-20" />
        </td>
        <td className="px-6 py-4 text-center">
          <input type="checkbox" className="toggle toggle-info" onChange={(e) => handleChange(e.target.checked)} defaultChecked = {advertisement.isActive} />
        </td>
        <td className="px-6 py-4 text-center">
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <IconButton color="error" aria-label="add to shopping cart">
              <Delete />
            </IconButton>
          </a>
        </td>
      </tr>
    </>
  );
};

export default AdvertisementTable;
