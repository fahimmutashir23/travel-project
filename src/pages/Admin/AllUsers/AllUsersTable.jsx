import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AllUsersTable = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast("Successfully Delete");
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure to make Admin?",
      text: "He will get supper power",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${id}`, {response: true})
        .then(res => {
          if(res.data.modifiedCount > 0){
            toast('Congratulations! You are now Admin')
            refetch()
          }
        })
      }
    });
  }
  const handleRemoveAdmin = (id) => {
    Swal.fire({
      title: "Are you sure to remove Admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${id}`, {response: false})
        .then(res => {
          if(res.data.modifiedCount > 0){
            toast('Admin remove Successfully')
            refetch()
          }
        })
      }
    });
  }

  return (
    <>
      <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <th scope="row" className="px-6 py-4 font-medium text-lg">
          {user.name}
        </th>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4 text-center">{user.country}</td>
        <td className="px-6 py-4 text-center">{user.admin ? "Admin" : "User"}</td>
        <td className="px-6 py-4 text-center">
          <div className="flex items-center justify-center">
            <button onClick={() => handleMakeAdmin(user._id)} className="bg-green-600 text-white p-1 rounded-[2px] text-xs">
              Make Admin
            </button>
            <button onClick={() => handleRemoveAdmin(user._id)} className="bg-red-600 ml-2 text-white p-1 rounded-[2px] text-xs">
              Remove Admin
            </button>
          </div>
        </td>
        <td className="px-6 py-4 text-center">
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <IconButton
              onClick={() => handleDelete(user._id)}
              color="error"
              aria-label="add to shopping cart"
            >
              <Delete />
            </IconButton>
          </a>
        </td>
      </tr>
    </>
  );
};

AllUsersTable.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default AllUsersTable;
