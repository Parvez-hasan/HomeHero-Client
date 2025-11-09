import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

import HomeLayout from "../HomeLayout/HomeLayout";
import Service from "../Pages/Service";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

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
            }
        ]

    }
])