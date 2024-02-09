import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../Utils/Loader/ErrorPage";
import Hotel from "../pages/Hotels/Hotel";
import HotelDetails from "../Utils/Card/HotelDetails";
import Profile from "../components/Dashboard/Profile";
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
import Bookings from "../pages/Admin/Bookings/Bookings";
import PackageBooking from "../pages/Admin/PackageBooking/PackageBooking";
import AllPayments from "../pages/Admin/AllPayments/AllPayments";
import HotelBookings from "../pages/Admin/HotelBookings/HotelBookings";
import CarBookings from "../pages/Admin/CarBookings/CarBookings";
import AirBookings from "../pages/Admin/AirBookings/AirBookings";
import TourPackagesPage from "../pages/TourPackagesPage/TourPackagesPage";
import PrivetRoute from "../Security/PrivetRoute";
import AdminRoute from "../Security/AdminRoute";
import WebControl from "../pages/Admin/WebControl/WebControl";

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
        path: "signIn",
        element: <SignIn />,
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
        path: "tourPackagesPage",
        element: <TourPackagesPage />,
      },
      {
        path: "hotelDetails/:id",
        element: <HotelDetails />,
      },
      {
        path: "/packagesDetails/:id",
        element: <PrivetRoute><TourPackagesDetails /></PrivetRoute>,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
  {
    path: "/bookings",
    element: <DashboardLayout />,
    children: [
      {
        path: "/bookings",
        element: <AllBookings />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/dashboard",
        element: <Dashboard />,
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
      {
        path: "/dashboard/allBookings",
        element: <Bookings />,
      },
      {
        path: "/dashboard/packagesBookings",
        element: <PackageBooking />,
      },
      {
        path: "/dashboard/allPayments",
        element: <AllPayments />,
      },
      {
        path: "/dashboard/hotelBookings",
        element: <HotelBookings />,
      },
      {
        path: "/dashboard/carBookings",
        element: <CarBookings />,
      },
      {
        path: "/dashboard/flightBookings",
        element: <AirBookings />,
      },
      {
        path: "/dashboard/webControl",
        element: <WebControl />,
      },
    ],
  },
]);

export default Router;
