import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

import HomeLayout from "../HomeLayout/HomeLayout";
import Service from "../Pages/Service";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                Component: HomeLayout,
            },
            {
                path: "service",
                Component: Service
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "forgetPassword",
                Component: ForgotPassword
            },
            {
                path: "/*",
                element: <ErrorPage></ErrorPage>
            }
        ]

    }
])