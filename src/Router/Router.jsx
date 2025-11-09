import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

import HomeLayout from "../HomeLayout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {
                index: true,
                path: "/",
                Component: HomeLayout,
            }
        ]

    }
])