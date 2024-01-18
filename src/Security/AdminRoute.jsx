
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Utils/Loader/Loader';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {loading, user} = useAuth();
    const [isAdmin, adminLoading] = useAdmin();

    if(loading || adminLoading) {
        return <Loader width='20' center="center" />
    }

    if(user || isAdmin){
        return children
    }
    return (
        Swal.fire({
          title: "You are not Admin",
          text: "You don't have permission to enter this page",
          icon: "warning",
          confirmButtonText: "Cool",
        }) && <Navigate state={location.pathname} to="/login"></Navigate>
      );
};

AdminRoute.propTypes = {
    children: PropTypes.node,
};

export default AdminRoute;