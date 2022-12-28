
import {createBrowserRouter} from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signup/SignIn";
import Main from "../components/Layout/Main";
import HomePage from "../pages/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivateRoute from "./PrivateRoute";
import RedirectRoute from "./RedirectRoute";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <RedirectRoute><SignUp></SignUp></RedirectRoute>
                },
                {
                    path: '/register',
                    element: <RedirectRoute><SignUp></SignUp></RedirectRoute>
                },
                {
                    path: '/login',
                    element: <RedirectRoute><SignIn></SignIn></RedirectRoute>
                },
                {
                    path: '/home',
                    element: <PrivateRoute><HomePage></HomePage></PrivateRoute>
                },
                {
                    path: '/privacy-policy',
                    element: <PrivacyPolicy/>
                }
            ]


        }
    ]
);

export default router;