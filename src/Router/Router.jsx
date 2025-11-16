import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

import HomeLayout from "../HomeLayout/HomeLayout";
import Service from "../Pages/Service";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";
import MyService from "../Pages/MyService";
import AddService from "../Pages/AddService";
import PrivetRouter from "../Privet/PrivetRouter";
import Loading from "../Pages/Loading";
import Profile from "../Pages/Profile";
import ServiceSix from "../Pages/ServiceSix";
import EditService from "../Pages/EditService";
import ServiceDetails from "../Pages/ServiceDetails";
import MyBookings from "../Pages/MyBookings";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: HomeLayout,
                loader: () => fetch('http://localhost:4000/services-home'),
                hydrateFallbackElement: <Loading></Loading>
            },
           
            {
                path: "service",
                Component: Service,
                loader: () => fetch('http://localhost:4000/services'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "my-services",
                element: <PrivetRouter>
                         <MyService></MyService>
                         </PrivetRouter>
            },
            {
                path: "edit-service/:id",
                element: <PrivetRouter>
                    <EditService></EditService>
                 </PrivetRouter>
            },
            {
                path: "add-service",
                element: <PrivetRouter>
                         <AddService></AddService>
                         </PrivetRouter>
            },
            {
              path: "/serviceDetails/:id",
              element: <PrivetRouter>
                       <ServiceDetails></ServiceDetails>
                       </PrivetRouter>,
              loader: ({ params }) =>
              fetch(`http://localhost:4000/services/${params.id}`),
            },
            {
                path: "my-bookings",
                element:(
                    <PrivetRouter>
                        <MyBookings></MyBookings>
                    </PrivetRouter>
                )

            },
            {
                path: "profile",
                element: <PrivetRouter> 
                    <Profile></Profile>
                    </PrivetRouter>
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