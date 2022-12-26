import {createBrowserRouter} from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signup/SignIn";
import Main from "../components/Layout/Main";
import HomePage from "../pages/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/register',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/login',
                    element: <SignIn></SignIn>
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