import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Utils/Loader/Loader";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const PrivetRout = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader width="20" center="center"></Loader>;
  }

  if (user) {
    return children;
  } 
  else {
    return (
      Swal.fire({
        title: "You are not Logged in",
        text: "Please Login first to use this service",
        icon: "warning",
        confirmButtonText: "Cool",
      }) && <Navigate state={location.pathname} to="/login"></Navigate>
    );
  }
};

PrivetRout.propTypes = {
  children: PropTypes.node
};

export default PrivetRout;
