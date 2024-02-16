/* eslint-disable react/prop-types */
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/advertisements/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              toast("Successfully Delete");
              refetch();
            }
          });
        }
      });
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
            <IconButton onClick={()=>handleDelete(advertisement._id)} color="error" aria-label="add to shopping cart">
              <Delete />
            </IconButton>
        </td>
      </tr>
    </>
  );
};

export default AdvertisementTable;
