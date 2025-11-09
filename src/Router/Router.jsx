import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Bannar from "../components/Bannar";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {
                index: true,
                path: "/",
                Component: Bannar,
            }
        ]

    }
])