import { Delete, VisibilityOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllPackagesTable = ({tourPackage, refetch}) => {
  const axiosSecure = useAxiosSecure();
    const {_id, name, destination, duration, price} = tourPackage;
  
  

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete"
      }).then((result) => {
        if (result.isConfirmed) {
            toast('Successfully Delete');
            refetch()
        }
      })
    }

    return (
        <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap text-lg"
        >
          {name}
        </th>
        <td className="px-6 py-4">{destination}</td>
        <td className="px-6 py-4 text-center">{price}$</td>
        <td className="px-6 py-4 text-center">{duration}</td>
        <td className="px-6 py-4 text-center">
            <IconButton color="primary" aria-label="add to shopping cart">
                <Link to={`/hotelDetails/${_id}`}>
                <VisibilityOutlined />
                </Link>
            </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
            <IconButton color="primary" aria-label="add to shopping cart">
                <FaEdit />
            </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <IconButton onClick={() => handleDelete(_id)} color="primary" aria-label="add to shopping cart">
                <Delete />
            </IconButton>
          </a>
        </td>
      </tr>
    );
};

AllPackagesTable.propTypes = {
    tourPackage: PropTypes.object,
    refetch: PropTypes.func
};

export default AllPackagesTable;