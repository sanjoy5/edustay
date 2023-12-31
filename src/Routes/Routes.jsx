import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import CollegeDetails from "../pages/CollegeDetails";
import College from "../pages/College";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Success from "../pages/Success";
import ErrorPage from "../pages/ErrorPage";
import Admission from "../pages/Admission";
import AdmissionForm from "../pages/AdmissionForm";
import MyCollege from "../pages/MyCollege";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/college-details/:id',
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
            },
            {
                path: '/colleges',
                element: <College />,
            },
            {
                path: '/admission/',
                element: <PrivateRoute><Admission /></PrivateRoute>,
                loader: () => fetch('https://edustay-server.vercel.app/colleges')
            },
            {
                path: '/admission-form/:id',
                element: <AdmissionForm />,
                loader: ({ params }) => fetch(`https://edustay-server.vercel.app/colleges/${params.id}`)
            },
            {
                path: '/my-college',
                element: <PrivateRoute><MyCollege /></PrivateRoute>,
                loader: () => fetch('https://edustay-server.vercel.app/colleges')
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/success',
        element: <Success />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;