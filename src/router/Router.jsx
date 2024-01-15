import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../Utils/Loader/ErrorPage";
import Hotel from "../pages/Hotels/Hotel";
import HotelDetails from "../Utils/Card/HotelDetails";
import Profile from "../components/Dashboard/Profile";
import BookingLayout from "../layout/BookingLayout";
import AllBookings from "../pages/MyBookings/AllBookings/AllBookings";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import AddHotels from "../pages/Admin/AddHotels/AddHotels";
import AllHotels from "../pages/Admin/AllHotels/AllHotels";
import AddRooms from "../pages/Admin/AddRooms/AddRooms";
import AllPackages from "../pages/Admin/AllPackages/AllPackages";
import AddTourPackages from "../pages/Admin/AddTourPackages/AddTourPackages";
import AllUsers from "../pages/Admin/AllUsers/AllUsers";
import TourPackagesDetails from "../components/TourPackages/TourPackagesDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "hotel",
        element: <Hotel />,
      },
      {
        path: "hotelDetails/:id",
        element: <HotelDetails />,
      },
      {
        path:"/packagesDetails/:id",
        element:<TourPackagesDetails/>
       },
    ],
  },
  {
    path: "/bookings",
    element: <BookingLayout />,
    children: [
      {
        path: "/bookings",
        element: <AllBookings />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/addHotels",
        element: <AddHotels />,
      },
      {
        path: "/dashboard/addRooms/:id",
        element: <AddRooms />,
      },
      {
        path: "/dashboard/allRooms",
        element: <AllHotels />,
      },
      {
        path: "/dashboard/allPackages",
        element: <AllPackages />,
      },
      {
        path: "/dashboard/addTourPackages",
        element: <AddTourPackages />,
      },
      
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default Router;
