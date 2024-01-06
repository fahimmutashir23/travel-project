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

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'hotel',
                element: <Hotel />
            },
            {
                path:"hotel/:id",
                element:<HotelDetails/>
            },
            {
                path:"profile",
                element:<Profile/>
            }
        ]
    },
    {
        path: '/bookings',
        element: <BookingLayout />,
        children: [
            {
                path: '/bookings',
                element: <AllBookings />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]

    }
])

export default Router;