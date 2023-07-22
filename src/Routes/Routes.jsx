import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import CollegeDetails from "../pages/CollegeDetails";

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
                element: <CollegeDetails />
            },
        ]
    },
]);

export default router;